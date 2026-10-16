import bpy
import bmesh
import math
import random
import os
from mathutils import Vector, Euler, Matrix

def create_jesus_cross_scene():
    print("==================================================")
    print("BUILDING 3D JESUS CARRYING CROSS SCENE IN BLENDER")
    print("==================================================")

    # 1. Clear existing scene
    bpy.ops.wm.read_factory_settings(use_empty=True)
    
    scene = bpy.context.scene
    scene.frame_start = 1
    scene.frame_end = 140
    scene.render.fps = 24
    
    # Enable Rigid Body World
    if not scene.rigidbody_world:
        bpy.ops.rigidbody.world_add()
    scene.rigidbody_world.point_cache.frame_start = 1
    scene.rigidbody_world.point_cache.frame_end = 140
    scene.rigidbody_world.time_scale = 1.0
    scene.rigidbody_world.substeps_per_frame = 10
    scene.rigidbody_world.solver_iterations = 20

    # 2. Materials Setup
    # ----------------------------------------------------
    # Wood Material (Weathered Hewn Cedar)
    mat_wood = bpy.data.materials.new(name="Aged_Timber")
    mat_wood.use_nodes = True
    bsdf_wood = mat_wood.node_tree.nodes.get("Principled BSDF")
    if bsdf_wood:
        bsdf_wood.inputs["Base Color"].default_value = (0.24, 0.16, 0.10, 1.0)
        bsdf_wood.inputs["Roughness"].default_value = 0.88
    
    # Robe Fabric Material (Coarse Off-White Linen)
    mat_robe = bpy.data.materials.new(name="Coarse_Linen")
    mat_robe.use_nodes = True
    bsdf_robe = mat_robe.node_tree.nodes.get("Principled BSDF")
    if bsdf_robe:
        bsdf_robe.inputs["Base Color"].default_value = (0.87, 0.83, 0.74, 1.0)
        bsdf_robe.inputs["Roughness"].default_value = 0.92

    # Skin Material (Sun-Weathered Olive Tan)
    mat_skin = bpy.data.materials.new(name="Weathered_Skin")
    mat_skin.use_nodes = True
    bsdf_skin = mat_skin.node_tree.nodes.get("Principled BSDF")
    if bsdf_skin:
        bsdf_skin.inputs["Base Color"].default_value = (0.64, 0.44, 0.32, 1.0)
        bsdf_skin.inputs["Roughness"].default_value = 0.65

    # Hair & Beard Material (Dark Umber)
    mat_hair = bpy.data.materials.new(name="Dark_Hair")
    mat_hair.use_nodes = True
    bsdf_hair = mat_hair.node_tree.nodes.get("Principled BSDF")
    if bsdf_hair:
        bsdf_hair.inputs["Base Color"].default_value = (0.12, 0.08, 0.05, 1.0)
        bsdf_hair.inputs["Roughness"].default_value = 0.85

    # Thorn Crown & Rope Material
    mat_thorn = bpy.data.materials.new(name="Briar_Thorns")
    mat_thorn.use_nodes = True
    bsdf_thorn = mat_thorn.node_tree.nodes.get("Principled BSDF")
    if bsdf_thorn:
        bsdf_thorn.inputs["Base Color"].default_value = (0.18, 0.12, 0.07, 1.0)
        bsdf_thorn.inputs["Roughness"].default_value = 0.75

    # Ground Material (Dusty Jerusalem Limestone)
    mat_ground = bpy.data.materials.new(name="Limestone_Slope")
    mat_ground.use_nodes = True
    bsdf_ground = mat_ground.node_tree.nodes.get("Principled BSDF")
    if bsdf_ground:
        bsdf_ground.inputs["Base Color"].default_value = (0.58, 0.52, 0.42, 1.0)
        bsdf_ground.inputs["Roughness"].default_value = 0.95

    # 3. Environment: The Ascending Hill (Golgotha Path)
    # ----------------------------------------------------
    bpy.ops.mesh.primitive_grid_add(x_subdivisions=40, y_subdivisions=40, size=28, location=(0, 6, 1.2))
    ground = bpy.context.active_object
    ground.name = "Golgotha_Incline"
    ground.rotation_euler = Euler((math.radians(16.5), 0, 0), 'XYZ')
    
    # Deform ground with subtle rocky undulations
    mesh = ground.data
    random.seed(42)
    for v in mesh.vertices:
        v.co.z += (random.random() - 0.5) * 0.45
    mesh.update()
    
    ground.data.materials.append(mat_ground)
    bpy.ops.object.shade_smooth()
    
    # Ground Rigid Body (Passive Collider)
    bpy.ops.rigidbody.object_add()
    ground.rigid_body.type = 'PASSIVE'
    ground.rigid_body.collision_shape = 'MESH'
    ground.rigid_body.friction = 0.85
    ground.rigid_body.restitution = 0.15

    # Ledge stones on path
    for i in range(8):
        sx = (random.random() - 0.5) * 6.0
        sy = random.uniform(-4, 12)
        sz = math.tan(math.radians(16.5)) * (sy - 6) + 1.2 + 0.1
        bpy.ops.mesh.primitive_cube_add(size=random.uniform(0.6, 1.4), location=(sx, sy, sz))
        rock = bpy.context.active_object
        rock.name = f"Stone_Ledge_{i}"
        rock.scale = (random.uniform(0.8, 1.6), random.uniform(0.6, 1.2), random.uniform(0.3, 0.6))
        rock.rotation_euler = Euler((random.uniform(-0.3, 0.3), random.uniform(-0.3, 0.3), random.uniform(-3, 3)))
        rock.data.materials.append(mat_ground)
        bpy.ops.rigidbody.object_add()
        rock.rigid_body.type = 'PASSIVE'
        rock.rigid_body.collision_shape = 'CONVEX_HULL'

    # 4. Master Empty for Christ & Cross Animation
    # ----------------------------------------------------
    bpy.ops.object.empty_add(type='PLAIN_AXES', location=(0, 0, 1.25))
    root_walker = bpy.context.active_object
    root_walker.name = "Christ_Root_Walker"

    # Uphill Walking Keyframes (Frames 1 - 65)
    # Stride forward and up the slope
    slope_angle = math.radians(16.5)
    stride_speed = 0.05
    for f in range(1, 66):
        t = f - 1
        y_pos = t * stride_speed
        z_pos = 1.25 + math.tan(slope_angle) * y_pos
        # Walking heave / bobbing
        bob = math.sin(f * 0.35) * 0.08
        # Straining forward tilt
        tilt = math.radians(24) + math.sin(f * 0.35) * math.radians(3)
        
        root_walker.location = Vector((0, y_pos, z_pos + bob))
        root_walker.rotation_euler = Euler((tilt, 0, 0))
        root_walker.keyframe_insert(data_path="location", frame=f)
        root_walker.keyframe_insert(data_path="rotation_euler", frame=f)

    # Frame 66 to 75: Stumble & Fall under weight (Impact)
    impact_y = 65 * stride_speed + 0.2
    impact_z = 1.25 + math.tan(slope_angle) * impact_y - 0.45
    root_walker.location = Vector((0, impact_y, impact_z))
    root_walker.rotation_euler = Euler((math.radians(48), 0, math.radians(-8)))
    root_walker.keyframe_insert(data_path="location", frame=68)
    root_walker.keyframe_insert(data_path="rotation_euler", frame=68)

    # 5. Sculpted Figure of Christ
    # ----------------------------------------------------
    # Torso & Draped Robe
    bpy.ops.mesh.primitive_cone_add(vertices=20, radius1=0.75, radius2=0.32, depth=2.0, location=(0, 0, 0.95))
    robe_lower = bpy.context.active_object
    robe_lower.name = "Robe_Lower"
    robe_lower.parent = root_walker
    robe_lower.data.materials.append(mat_robe)
    
    # Upper Tunic Draping
    bpy.ops.mesh.primitive_cylinder_add(vertices=16, radius=0.48, depth=1.0, location=(0, 0.15, 1.6))
    tunic_upper = bpy.context.active_object
    tunic_upper.name = "Tunic_Upper"
    tunic_upper.rotation_euler = Euler((math.radians(18), 0, 0))
    tunic_upper.parent = root_walker
    tunic_upper.data.materials.append(mat_robe)

    # Waist Rope Sash
    bpy.ops.mesh.primitive_torus_add(major_radius=0.46, minor_radius=0.065, location=(0, 0.08, 1.2))
    sash = bpy.context.active_object
    sash.name = "Waist_Rope"
    sash.rotation_euler = Euler((math.radians(12), 0, 0))
    sash.parent = root_walker
    sash.data.materials.append(mat_thorn)

    # Bowed Head
    bpy.ops.mesh.primitive_uv_sphere_add(radius=0.30, location=(0, 0.42, 2.18))
    head = bpy.context.active_object
    head.name = "Christ_Head"
    head.rotation_euler = Euler((math.radians(38), 0, 0))
    head.parent = root_walker
    head.data.materials.append(mat_skin)

    # Flowing Hair & Beard
    bpy.ops.mesh.primitive_uv_sphere_add(radius=0.33, location=(0, 0.38, 2.22))
    hair = bpy.context.active_object
    hair.name = "Christ_Hair"
    hair.scale = (0.9, 1.1, 0.85)
    hair.parent = root_walker
    hair.data.materials.append(mat_hair)

    # Crown of Thorns
    bpy.ops.mesh.primitive_torus_add(major_radius=0.32, minor_radius=0.038, location=(0, 0.46, 2.36))
    crown = bpy.context.active_object
    crown.name = "Crown_Of_Thorns"
    crown.rotation_euler = Euler((math.radians(42), 0, 0))
    crown.parent = root_walker
    crown.data.materials.append(mat_thorn)
    
    # Arms Grasping Cross
    # Right Arm reaching up to crossbeam
    bpy.ops.mesh.primitive_cylinder_add(radius=0.10, depth=0.9, location=(0.35, 0.45, 1.95))
    arm_r = bpy.context.active_object
    arm_r.name = "Arm_Right"
    arm_r.rotation_euler = Euler((math.radians(-55), math.radians(25), math.radians(20)))
    arm_r.parent = root_walker
    arm_r.data.materials.append(mat_skin)

    # Left Arm supporting beam
    bpy.ops.mesh.primitive_cylinder_add(radius=0.10, depth=0.85, location=(-0.30, 0.25, 1.7))
    arm_l = bpy.context.active_object
    arm_l.name = "Arm_Left"
    arm_l.rotation_euler = Euler((math.radians(-25), math.radians(-30), 0))
    arm_l.parent = root_walker
    arm_l.data.materials.append(mat_skin)

    # 6. Fracturable Timber Cross with Dynamic Break-Apart
    # ----------------------------------------------------
    # We construct the Cross as a collection of interlocking fractured chunks:
    # 6 post chunks along the upright post, 4 chunks along the crossbeam,
    # plus splinter shards at the junction!
    fracture_pieces = []
    
    # Cross Dimensions & Alignment across the shoulder
    post_length = 4.6
    beam_length = 2.6
    timber_thick = 0.26
    
    # Generate Post Chunks along length
    num_post_chunks = 7
    chunk_h = post_length / num_post_chunks
    for i in range(num_post_chunks):
        z_offset = -post_length/2 + (i + 0.5) * chunk_h
        bpy.ops.mesh.primitive_cube_add(size=1)
        chunk = bpy.context.active_object
        chunk.name = f"Cross_Post_Frag_{i}"
        chunk.scale = (timber_thick * random.uniform(0.92, 1.05),
                       timber_thick * random.uniform(0.92, 1.05),
                       chunk_h * 0.98)
        # Position along angled post vector
        # Cross angle: 42 deg down over shoulder
        chunk.location = Vector((0.22 + (random.random()-0.5)*0.02,
                                 -0.5 + z_offset * math.sin(math.radians(38)),
                                 1.9 + z_offset * math.cos(math.radians(38))))
        chunk.rotation_euler = Euler((math.radians(-52), math.radians(12), math.radians(15)))
        chunk.data.materials.append(mat_wood)
        fracture_pieces.append(chunk)

    # Generate Crossbeam Chunks
    num_beam_chunks = 5
    chunk_w = beam_length / num_beam_chunks
    for j in range(num_beam_chunks):
        x_offset = -beam_length/2 + (j + 0.5) * chunk_w
        bpy.ops.mesh.primitive_cube_add(size=1)
        b_chunk = bpy.context.active_object
        b_chunk.name = f"Cross_Beam_Frag_{j}"
        b_chunk.scale = (chunk_w * 0.98,
                         timber_thick * random.uniform(0.92, 1.05),
                         timber_thick * random.uniform(0.92, 1.05))
        # Beam crosses the post near junction (z=1.2 along post)
        b_chunk.location = Vector((x_offset + 0.22,
                                  -0.5 + 1.2 * math.sin(math.radians(38)),
                                  1.9 + 1.2 * math.cos(math.radians(38))))
        b_chunk.rotation_euler = Euler((math.radians(-52), math.radians(12), math.radians(15)))
        b_chunk.data.materials.append(mat_wood)
        fracture_pieces.append(b_chunk)

    # Additional Splinters and Debris Shards around junction
    for k in range(10):
        bpy.ops.mesh.primitive_cone_add(vertices=5, radius1=0.08, depth=random.uniform(0.3, 0.7))
        splinter = bpy.context.active_object
        splinter.name = f"Cross_Splinter_{k}"
        splinter.location = Vector((0.22 + (random.random()-0.5)*0.4,
                                    -0.5 + 1.2 * math.sin(math.radians(38)) + (random.random()-0.5)*0.3,
                                    1.9 + 1.2 * math.cos(math.radians(38)) + (random.random()-0.5)*0.3))
        splinter.rotation_euler = Euler((random.uniform(-3, 3), random.uniform(-3, 3), random.uniform(-3, 3)))
        splinter.data.materials.append(mat_wood)
        fracture_pieces.append(splinter)

    # 7. Configure Rigid Body Physics & Animation for Fractured Cross
    # ----------------------------------------------------
    # While Jesus walks (Frames 1 to 65): Pieces are parented to Walker and kinematic = True
    # At Frame 66: Kinematic = False -> Bullet physics takes over and cross BREAKS APART!
    for p in fracture_pieces:
        # Keep relative transform and parent to walker for walk phase
        # Record initial world position
        init_world_loc = p.location.copy()
        init_world_rot = p.rotation_euler.copy()
        
        # Add Active Rigid Body
        bpy.context.view_layer.objects.active = p
        bpy.ops.rigidbody.object_add()
        p.rigid_body.type = 'ACTIVE'
        p.rigid_body.mass = random.uniform(4.0, 12.0)
        p.rigid_body.collision_shape = 'CONVEX_HULL'
        p.rigid_body.friction = 0.75
        p.rigid_body.restitution = 0.25

        # Keyframe Kinematic motion during walk
        p.parent = root_walker
        p.matrix_parent_inverse = root_walker.matrix_world.inverted()
        
        # Kinematic = True until impact
        p.rigid_body.kinematic = True
        p.rigid_body.keyframe_insert(data_path="kinematic", frame=1)
        p.rigid_body.keyframe_insert(data_path="kinematic", frame=65)

        # Kinematic = False at impact: BREAK APART DYNAMICS
        p.rigid_body.kinematic = False
        p.rigid_body.keyframe_insert(data_path="kinematic", frame=66)

    # 8. Dynamic Shatter Impulse Force Field
    # ----------------------------------------------------
    # Creates an explosive outward burst at frame 66 throwing cross fragments into chaotic tumble
    bpy.ops.object.effector_add(type='FORCE', location=(0.2, 3.4, 2.5))
    force = bpy.context.active_object
    force.name = "Shatter_Explosion_Force"
    force.field.strength = 0
    force.keyframe_insert(data_path="field.strength", frame=1)
    force.keyframe_insert(data_path="field.strength", frame=65)
    
    # Pulse burst at frame 66
    force.field.strength = 1800
    force.field.noise = 0.5
    force.keyframe_insert(data_path="field.strength", frame=66)
    
    # Decay back to zero
    force.field.strength = 0
    force.keyframe_insert(data_path="field.strength", frame=72)

    # 9. Cinematic Camera with Dynamic Tracking
    # ----------------------------------------------------
    # Low-angle dramatic framing looking up the hill towards Christ and the cross
    bpy.ops.object.camera_add(location=(-4.8, -3.2, 1.8))
    cam = bpy.context.active_object
    cam.name = "Cinematic_Camera"
    cam.rotation_euler = Euler((math.radians(76), 0, math.radians(-54)))
    scene.camera = cam

    # Animate camera tracking the ascent and the break-apart impact
    cam.keyframe_insert(data_path="location", frame=1)
    cam.keyframe_insert(data_path="rotation_euler", frame=1)
    
    # Frame 66: Tracking closer to the impact point
    cam.location = Vector((-4.2, 1.8, 2.6))
    cam.rotation_euler = Euler((math.radians(80), 0, math.radians(-52)))
    cam.keyframe_insert(data_path="location", frame=66)
    cam.keyframe_insert(data_path="rotation_euler", frame=66)

    # Frame 140: Wide aftermath view of the fractured cross pieces scattered on the slope
    cam.location = Vector((-5.5, 4.0, 3.2))
    cam.rotation_euler = Euler((math.radians(82), 0, math.radians(-46)))
    cam.keyframe_insert(data_path="location", frame=140)
    cam.keyframe_insert(data_path="rotation_euler", frame=140)

    # 10. Lighting: Golden Sunlight and Divine Atmosphere
    # ----------------------------------------------------
    # Sun light casting sharp dramatic diagonal shadows across the hill
    bpy.ops.object.light_add(type='SUN', location=(-6, -8, 14))
    sun = bpy.context.active_object
    sun.name = "Golgotha_Sun"
    sun.data.energy = 6.5
    sun.data.color = (1.0, 0.94, 0.82)
    sun.rotation_euler = Euler((math.radians(52), math.radians(-28), math.radians(35)))

    # Ambient Sky Fill Light
    bpy.ops.object.light_add(type='AREA', location=(4, 6, 8))
    sky_fill = bpy.context.active_object
    sky_fill.name = "Sky_Atmosphere_Fill"
    sky_fill.data.energy = 380
    sky_fill.data.color = (0.75, 0.82, 0.95)
    sky_fill.data.size = 6.0

    # Warm Ground Bounce
    bpy.ops.object.light_add(type='AREA', location=(-2, 4, 0.5))
    ground_bounce = bpy.context.active_object
    ground_bounce.name = "Ground_Bounce_Light"
    ground_bounce.data.energy = 160
    ground_bounce.data.color = (0.92, 0.72, 0.52)
    ground_bounce.data.size = 4.0

    print("SCENE SETUP COMPLETE.")
    return True

if __name__ == "__main__":
    create_jesus_cross_scene()
    
    # Save the master .blend file in the project folder
    output_dir = r"c:\Users\Maqhawe T Ngwenya\Desktop\Projects\Sonsof elohim"
    blend_path = os.path.join(output_dir, "Jesus_Carrying_Cross_BreakApart.blend")
    glb_path = os.path.join(output_dir, "Jesus_Carrying_Cross.glb")
    preview_path = os.path.join(output_dir, "Jesus_Cross_Preview.png")

    print(f"Saving Blender file to: {blend_path}")
    bpy.ops.wm.save_as_mainfile(filepath=blend_path)
    
    # Export 3D GLB for web / interactive inspection
    print(f"Exporting 3D GLB to: {glb_path}")
    try:
        bpy.ops.export_scene.gltf(filepath=glb_path, export_format='GLB', export_animations=True)
    except Exception as e:
        print(f"GLTF export note: {e}")

    # Render a high-resolution still image (Frame 68 - Break Apart Impact)
    print(f"Rendering preview image at Frame 68 to: {preview_path}")
    bpy.context.scene.frame_set(68)
    bpy.context.scene.render.filepath = preview_path
    bpy.context.scene.render.resolution_x = 1280
    bpy.context.scene.render.resolution_y = 720
    bpy.ops.render.render(write_still=True)

    print("ALL ASSETS GENERATED SUCCESSFULLY!")
