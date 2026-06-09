var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1602 = root || request.c( 'UnityEngine.JointSpring' )
  var i1603 = data
  i1602.spring = i1603[0]
  i1602.damper = i1603[1]
  i1602.targetPosition = i1603[2]
  return i1602
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1604 = root || request.c( 'UnityEngine.JointMotor' )
  var i1605 = data
  i1604.m_TargetVelocity = i1605[0]
  i1604.m_Force = i1605[1]
  i1604.m_FreeSpin = i1605[2]
  return i1604
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1606 = root || request.c( 'UnityEngine.JointLimits' )
  var i1607 = data
  i1606.m_Min = i1607[0]
  i1606.m_Max = i1607[1]
  i1606.m_Bounciness = i1607[2]
  i1606.m_BounceMinVelocity = i1607[3]
  i1606.m_ContactDistance = i1607[4]
  i1606.minBounce = i1607[5]
  i1606.maxBounce = i1607[6]
  return i1606
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1608 = root || request.c( 'UnityEngine.JointDrive' )
  var i1609 = data
  i1608.m_PositionSpring = i1609[0]
  i1608.m_PositionDamper = i1609[1]
  i1608.m_MaximumForce = i1609[2]
  i1608.m_UseAcceleration = i1609[3]
  return i1608
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1610 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1611 = data
  i1610.m_Spring = i1611[0]
  i1610.m_Damper = i1611[1]
  return i1610
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1612 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1613 = data
  i1612.m_Limit = i1613[0]
  i1612.m_Bounciness = i1613[1]
  i1612.m_ContactDistance = i1613[2]
  return i1612
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1614 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1615 = data
  i1614.m_ExtremumSlip = i1615[0]
  i1614.m_ExtremumValue = i1615[1]
  i1614.m_AsymptoteSlip = i1615[2]
  i1614.m_AsymptoteValue = i1615[3]
  i1614.m_Stiffness = i1615[4]
  return i1614
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1616 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1617 = data
  i1616.m_LowerAngle = i1617[0]
  i1616.m_UpperAngle = i1617[1]
  return i1616
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1618 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1619 = data
  i1618.m_MotorSpeed = i1619[0]
  i1618.m_MaximumMotorTorque = i1619[1]
  return i1618
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1620 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1621 = data
  i1620.m_DampingRatio = i1621[0]
  i1620.m_Frequency = i1621[1]
  i1620.m_Angle = i1621[2]
  return i1620
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1622 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1623 = data
  i1622.m_LowerTranslation = i1623[0]
  i1622.m_UpperTranslation = i1623[1]
  return i1622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1625 = data
  i1624.name = i1625[0]
  i1624.width = i1625[1]
  i1624.height = i1625[2]
  i1624.mipmapCount = i1625[3]
  i1624.anisoLevel = i1625[4]
  i1624.filterMode = i1625[5]
  i1624.hdr = !!i1625[6]
  i1624.format = i1625[7]
  i1624.wrapMode = i1625[8]
  i1624.alphaIsTransparency = !!i1625[9]
  i1624.alphaSource = i1625[10]
  i1624.graphicsFormat = i1625[11]
  i1624.sRGBTexture = !!i1625[12]
  i1624.desiredColorSpace = i1625[13]
  i1624.wrapU = i1625[14]
  i1624.wrapV = i1625[15]
  return i1624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1626 = root || new pc.UnityMaterial()
  var i1627 = data
  i1626.name = i1627[0]
  request.r(i1627[1], i1627[2], 0, i1626, 'shader')
  i1626.renderQueue = i1627[3]
  i1626.enableInstancing = !!i1627[4]
  var i1629 = i1627[5]
  var i1628 = []
  for(var i = 0; i < i1629.length; i += 1) {
    i1628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1629[i + 0]) );
  }
  i1626.floatParameters = i1628
  var i1631 = i1627[6]
  var i1630 = []
  for(var i = 0; i < i1631.length; i += 1) {
    i1630.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1631[i + 0]) );
  }
  i1626.colorParameters = i1630
  var i1633 = i1627[7]
  var i1632 = []
  for(var i = 0; i < i1633.length; i += 1) {
    i1632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1633[i + 0]) );
  }
  i1626.vectorParameters = i1632
  var i1635 = i1627[8]
  var i1634 = []
  for(var i = 0; i < i1635.length; i += 1) {
    i1634.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1635[i + 0]) );
  }
  i1626.textureParameters = i1634
  var i1637 = i1627[9]
  var i1636 = []
  for(var i = 0; i < i1637.length; i += 1) {
    i1636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1637[i + 0]) );
  }
  i1626.materialFlags = i1636
  return i1626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1641 = data
  i1640.name = i1641[0]
  i1640.value = i1641[1]
  return i1640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1645 = data
  i1644.name = i1645[0]
  i1644.value = new pc.Color(i1645[1], i1645[2], i1645[3], i1645[4])
  return i1644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1649 = data
  i1648.name = i1649[0]
  i1648.value = new pc.Vec4( i1649[1], i1649[2], i1649[3], i1649[4] )
  return i1648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1653 = data
  i1652.name = i1653[0]
  request.r(i1653[1], i1653[2], 0, i1652, 'value')
  return i1652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1657 = data
  i1656.name = i1657[0]
  i1656.enabled = !!i1657[1]
  return i1656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1659 = data
  i1658.position = new pc.Vec3( i1659[0], i1659[1], i1659[2] )
  i1658.scale = new pc.Vec3( i1659[3], i1659[4], i1659[5] )
  i1658.rotation = new pc.Quat(i1659[6], i1659[7], i1659[8], i1659[9])
  return i1658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1661 = data
  request.r(i1661[0], i1661[1], 0, i1660, 'sharedMesh')
  return i1660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1663 = data
  request.r(i1663[0], i1663[1], 0, i1662, 'additionalVertexStreams')
  i1662.enabled = !!i1663[2]
  request.r(i1663[3], i1663[4], 0, i1662, 'sharedMaterial')
  var i1665 = i1663[5]
  var i1664 = []
  for(var i = 0; i < i1665.length; i += 2) {
  request.r(i1665[i + 0], i1665[i + 1], 2, i1664, '')
  }
  i1662.sharedMaterials = i1664
  i1662.receiveShadows = !!i1663[6]
  i1662.shadowCastingMode = i1663[7]
  i1662.sortingLayerID = i1663[8]
  i1662.sortingOrder = i1663[9]
  i1662.lightmapIndex = i1663[10]
  i1662.lightmapSceneIndex = i1663[11]
  i1662.lightmapScaleOffset = new pc.Vec4( i1663[12], i1663[13], i1663[14], i1663[15] )
  i1662.lightProbeUsage = i1663[16]
  i1662.reflectionProbeUsage = i1663[17]
  return i1662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1669 = data
  i1668.name = i1669[0]
  i1668.tagId = i1669[1]
  i1668.enabled = !!i1669[2]
  i1668.isStatic = !!i1669[3]
  i1668.layer = i1669[4]
  return i1668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1671 = data
  i1670.name = i1671[0]
  i1670.halfPrecision = !!i1671[1]
  i1670.useSimplification = !!i1671[2]
  i1670.useUInt32IndexFormat = !!i1671[3]
  i1670.vertexCount = i1671[4]
  i1670.aabb = i1671[5]
  var i1673 = i1671[6]
  var i1672 = []
  for(var i = 0; i < i1673.length; i += 1) {
    i1672.push( !!i1673[i + 0] );
  }
  i1670.streams = i1672
  i1670.vertices = i1671[7]
  var i1675 = i1671[8]
  var i1674 = []
  for(var i = 0; i < i1675.length; i += 1) {
    i1674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1675[i + 0]) );
  }
  i1670.subMeshes = i1674
  var i1677 = i1671[9]
  var i1676 = []
  for(var i = 0; i < i1677.length; i += 16) {
    i1676.push( new pc.Mat4().setData(i1677[i + 0], i1677[i + 1], i1677[i + 2], i1677[i + 3],  i1677[i + 4], i1677[i + 5], i1677[i + 6], i1677[i + 7],  i1677[i + 8], i1677[i + 9], i1677[i + 10], i1677[i + 11],  i1677[i + 12], i1677[i + 13], i1677[i + 14], i1677[i + 15]) );
  }
  i1670.bindposes = i1676
  var i1679 = i1671[10]
  var i1678 = []
  for(var i = 0; i < i1679.length; i += 1) {
    i1678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1679[i + 0]) );
  }
  i1670.blendShapes = i1678
  return i1670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1685 = data
  i1684.triangles = i1685[0]
  return i1684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1691 = data
  i1690.name = i1691[0]
  var i1693 = i1691[1]
  var i1692 = []
  for(var i = 0; i < i1693.length; i += 1) {
    i1692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1693[i + 0]) );
  }
  i1690.frames = i1692
  return i1690
}

Deserializers["Project.Scripts.Hex.HexElement"] = function (request, data, root) {
  var i1694 = root || request.c( 'Project.Scripts.Hex.HexElement' )
  var i1695 = data
  request.r(i1695[0], i1695[1], 0, i1694, '_meshRenderer')
  return i1694
}

Deserializers["Project.Scripts.Hex.HexCell"] = function (request, data, root) {
  var i1696 = root || request.c( 'Project.Scripts.Hex.HexCell' )
  var i1697 = data
  return i1696
}

Deserializers["Project.Scripts.Hex.HexStack"] = function (request, data, root) {
  var i1698 = root || request.c( 'Project.Scripts.Hex.HexStack' )
  var i1699 = data
  request.r(i1699[0], i1699[1], 0, i1698, '_elementsContainer')
  return i1698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1701 = data
  i1700.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1701[0], i1700.main)
  i1700.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1701[1], i1700.colorBySpeed)
  i1700.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1701[2], i1700.colorOverLifetime)
  i1700.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1701[3], i1700.emission)
  i1700.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1701[4], i1700.rotationBySpeed)
  i1700.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1701[5], i1700.rotationOverLifetime)
  i1700.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1701[6], i1700.shape)
  i1700.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1701[7], i1700.sizeBySpeed)
  i1700.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1701[8], i1700.sizeOverLifetime)
  i1700.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1701[9], i1700.textureSheetAnimation)
  i1700.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1701[10], i1700.velocityOverLifetime)
  i1700.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1701[11], i1700.noise)
  i1700.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1701[12], i1700.inheritVelocity)
  i1700.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1701[13], i1700.forceOverLifetime)
  i1700.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1701[14], i1700.limitVelocityOverLifetime)
  i1700.useAutoRandomSeed = !!i1701[15]
  i1700.randomSeed = i1701[16]
  return i1700
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1702 = root || new pc.ParticleSystemMain()
  var i1703 = data
  i1702.duration = i1703[0]
  i1702.loop = !!i1703[1]
  i1702.prewarm = !!i1703[2]
  i1702.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1703[3], i1702.startDelay)
  i1702.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1703[4], i1702.startLifetime)
  i1702.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1703[5], i1702.startSpeed)
  i1702.startSize3D = !!i1703[6]
  i1702.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1703[7], i1702.startSizeX)
  i1702.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1703[8], i1702.startSizeY)
  i1702.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1703[9], i1702.startSizeZ)
  i1702.startRotation3D = !!i1703[10]
  i1702.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1703[11], i1702.startRotationX)
  i1702.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1703[12], i1702.startRotationY)
  i1702.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1703[13], i1702.startRotationZ)
  i1702.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1703[14], i1702.startColor)
  i1702.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1703[15], i1702.gravityModifier)
  i1702.simulationSpace = i1703[16]
  request.r(i1703[17], i1703[18], 0, i1702, 'customSimulationSpace')
  i1702.simulationSpeed = i1703[19]
  i1702.useUnscaledTime = !!i1703[20]
  i1702.scalingMode = i1703[21]
  i1702.playOnAwake = !!i1703[22]
  i1702.maxParticles = i1703[23]
  i1702.emitterVelocityMode = i1703[24]
  i1702.stopAction = i1703[25]
  return i1702
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1704 = root || new pc.MinMaxCurve()
  var i1705 = data
  i1704.mode = i1705[0]
  i1704.curveMin = new pc.AnimationCurve( { keys_flow: i1705[1] } )
  i1704.curveMax = new pc.AnimationCurve( { keys_flow: i1705[2] } )
  i1704.curveMultiplier = i1705[3]
  i1704.constantMin = i1705[4]
  i1704.constantMax = i1705[5]
  return i1704
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1706 = root || new pc.MinMaxGradient()
  var i1707 = data
  i1706.mode = i1707[0]
  i1706.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1707[1], i1706.gradientMin)
  i1706.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1707[2], i1706.gradientMax)
  i1706.colorMin = new pc.Color(i1707[3], i1707[4], i1707[5], i1707[6])
  i1706.colorMax = new pc.Color(i1707[7], i1707[8], i1707[9], i1707[10])
  return i1706
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1709 = data
  i1708.mode = i1709[0]
  var i1711 = i1709[1]
  var i1710 = []
  for(var i = 0; i < i1711.length; i += 1) {
    i1710.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1711[i + 0]) );
  }
  i1708.colorKeys = i1710
  var i1713 = i1709[2]
  var i1712 = []
  for(var i = 0; i < i1713.length; i += 1) {
    i1712.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1713[i + 0]) );
  }
  i1708.alphaKeys = i1712
  return i1708
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1714 = root || new pc.ParticleSystemColorBySpeed()
  var i1715 = data
  i1714.enabled = !!i1715[0]
  i1714.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1715[1], i1714.color)
  i1714.range = new pc.Vec2( i1715[2], i1715[3] )
  return i1714
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1719 = data
  i1718.color = new pc.Color(i1719[0], i1719[1], i1719[2], i1719[3])
  i1718.time = i1719[4]
  return i1718
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1723 = data
  i1722.alpha = i1723[0]
  i1722.time = i1723[1]
  return i1722
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1724 = root || new pc.ParticleSystemColorOverLifetime()
  var i1725 = data
  i1724.enabled = !!i1725[0]
  i1724.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1725[1], i1724.color)
  return i1724
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1726 = root || new pc.ParticleSystemEmitter()
  var i1727 = data
  i1726.enabled = !!i1727[0]
  i1726.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1727[1], i1726.rateOverTime)
  i1726.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1727[2], i1726.rateOverDistance)
  var i1729 = i1727[3]
  var i1728 = []
  for(var i = 0; i < i1729.length; i += 1) {
    i1728.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1729[i + 0]) );
  }
  i1726.bursts = i1728
  return i1726
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1732 = root || new pc.ParticleSystemBurst()
  var i1733 = data
  i1732.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1733[0], i1732.count)
  i1732.cycleCount = i1733[1]
  i1732.minCount = i1733[2]
  i1732.maxCount = i1733[3]
  i1732.repeatInterval = i1733[4]
  i1732.time = i1733[5]
  return i1732
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1734 = root || new pc.ParticleSystemRotationBySpeed()
  var i1735 = data
  i1734.enabled = !!i1735[0]
  i1734.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1735[1], i1734.x)
  i1734.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1735[2], i1734.y)
  i1734.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1735[3], i1734.z)
  i1734.separateAxes = !!i1735[4]
  i1734.range = new pc.Vec2( i1735[5], i1735[6] )
  return i1734
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1736 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1737 = data
  i1736.enabled = !!i1737[0]
  i1736.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1737[1], i1736.x)
  i1736.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1737[2], i1736.y)
  i1736.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1737[3], i1736.z)
  i1736.separateAxes = !!i1737[4]
  return i1736
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1738 = root || new pc.ParticleSystemShape()
  var i1739 = data
  i1738.enabled = !!i1739[0]
  i1738.shapeType = i1739[1]
  i1738.randomDirectionAmount = i1739[2]
  i1738.sphericalDirectionAmount = i1739[3]
  i1738.randomPositionAmount = i1739[4]
  i1738.alignToDirection = !!i1739[5]
  i1738.radius = i1739[6]
  i1738.radiusMode = i1739[7]
  i1738.radiusSpread = i1739[8]
  i1738.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1739[9], i1738.radiusSpeed)
  i1738.radiusThickness = i1739[10]
  i1738.angle = i1739[11]
  i1738.length = i1739[12]
  i1738.boxThickness = new pc.Vec3( i1739[13], i1739[14], i1739[15] )
  i1738.meshShapeType = i1739[16]
  request.r(i1739[17], i1739[18], 0, i1738, 'mesh')
  request.r(i1739[19], i1739[20], 0, i1738, 'meshRenderer')
  request.r(i1739[21], i1739[22], 0, i1738, 'skinnedMeshRenderer')
  i1738.useMeshMaterialIndex = !!i1739[23]
  i1738.meshMaterialIndex = i1739[24]
  i1738.useMeshColors = !!i1739[25]
  i1738.normalOffset = i1739[26]
  i1738.arc = i1739[27]
  i1738.arcMode = i1739[28]
  i1738.arcSpread = i1739[29]
  i1738.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1739[30], i1738.arcSpeed)
  i1738.donutRadius = i1739[31]
  i1738.position = new pc.Vec3( i1739[32], i1739[33], i1739[34] )
  i1738.rotation = new pc.Vec3( i1739[35], i1739[36], i1739[37] )
  i1738.scale = new pc.Vec3( i1739[38], i1739[39], i1739[40] )
  return i1738
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1740 = root || new pc.ParticleSystemSizeBySpeed()
  var i1741 = data
  i1740.enabled = !!i1741[0]
  i1740.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1741[1], i1740.x)
  i1740.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1741[2], i1740.y)
  i1740.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1741[3], i1740.z)
  i1740.separateAxes = !!i1741[4]
  i1740.range = new pc.Vec2( i1741[5], i1741[6] )
  return i1740
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1742 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1743 = data
  i1742.enabled = !!i1743[0]
  i1742.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1743[1], i1742.x)
  i1742.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1743[2], i1742.y)
  i1742.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1743[3], i1742.z)
  i1742.separateAxes = !!i1743[4]
  return i1742
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1744 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1745 = data
  i1744.enabled = !!i1745[0]
  i1744.mode = i1745[1]
  i1744.animation = i1745[2]
  i1744.numTilesX = i1745[3]
  i1744.numTilesY = i1745[4]
  i1744.useRandomRow = !!i1745[5]
  i1744.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1745[6], i1744.frameOverTime)
  i1744.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1745[7], i1744.startFrame)
  i1744.cycleCount = i1745[8]
  i1744.rowIndex = i1745[9]
  i1744.flipU = i1745[10]
  i1744.flipV = i1745[11]
  i1744.spriteCount = i1745[12]
  var i1747 = i1745[13]
  var i1746 = []
  for(var i = 0; i < i1747.length; i += 2) {
  request.r(i1747[i + 0], i1747[i + 1], 2, i1746, '')
  }
  i1744.sprites = i1746
  return i1744
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1750 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1751 = data
  i1750.enabled = !!i1751[0]
  i1750.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1751[1], i1750.x)
  i1750.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1751[2], i1750.y)
  i1750.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1751[3], i1750.z)
  i1750.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1751[4], i1750.radial)
  i1750.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1751[5], i1750.speedModifier)
  i1750.space = i1751[6]
  i1750.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1751[7], i1750.orbitalX)
  i1750.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1751[8], i1750.orbitalY)
  i1750.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1751[9], i1750.orbitalZ)
  i1750.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1751[10], i1750.orbitalOffsetX)
  i1750.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1751[11], i1750.orbitalOffsetY)
  i1750.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1751[12], i1750.orbitalOffsetZ)
  return i1750
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1752 = root || new pc.ParticleSystemNoise()
  var i1753 = data
  i1752.enabled = !!i1753[0]
  i1752.separateAxes = !!i1753[1]
  i1752.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1753[2], i1752.strengthX)
  i1752.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1753[3], i1752.strengthY)
  i1752.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1753[4], i1752.strengthZ)
  i1752.frequency = i1753[5]
  i1752.damping = !!i1753[6]
  i1752.octaveCount = i1753[7]
  i1752.octaveMultiplier = i1753[8]
  i1752.octaveScale = i1753[9]
  i1752.quality = i1753[10]
  i1752.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1753[11], i1752.scrollSpeed)
  i1752.scrollSpeedMultiplier = i1753[12]
  i1752.remapEnabled = !!i1753[13]
  i1752.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1753[14], i1752.remapX)
  i1752.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1753[15], i1752.remapY)
  i1752.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1753[16], i1752.remapZ)
  i1752.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1753[17], i1752.positionAmount)
  i1752.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1753[18], i1752.rotationAmount)
  i1752.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1753[19], i1752.sizeAmount)
  return i1752
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1754 = root || new pc.ParticleSystemInheritVelocity()
  var i1755 = data
  i1754.enabled = !!i1755[0]
  i1754.mode = i1755[1]
  i1754.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1755[2], i1754.curve)
  return i1754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1756 = root || new pc.ParticleSystemForceOverLifetime()
  var i1757 = data
  i1756.enabled = !!i1757[0]
  i1756.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1757[1], i1756.x)
  i1756.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1757[2], i1756.y)
  i1756.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1757[3], i1756.z)
  i1756.space = i1757[4]
  i1756.randomized = !!i1757[5]
  return i1756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1758 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1759 = data
  i1758.enabled = !!i1759[0]
  i1758.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1759[1], i1758.limit)
  i1758.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1759[2], i1758.limitX)
  i1758.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1759[3], i1758.limitY)
  i1758.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1759[4], i1758.limitZ)
  i1758.dampen = i1759[5]
  i1758.separateAxes = !!i1759[6]
  i1758.space = i1759[7]
  i1758.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1759[8], i1758.drag)
  i1758.multiplyDragByParticleSize = !!i1759[9]
  i1758.multiplyDragByParticleVelocity = !!i1759[10]
  return i1758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1761 = data
  request.r(i1761[0], i1761[1], 0, i1760, 'mesh')
  i1760.meshCount = i1761[2]
  i1760.activeVertexStreamsCount = i1761[3]
  i1760.alignment = i1761[4]
  i1760.renderMode = i1761[5]
  i1760.sortMode = i1761[6]
  i1760.lengthScale = i1761[7]
  i1760.velocityScale = i1761[8]
  i1760.cameraVelocityScale = i1761[9]
  i1760.normalDirection = i1761[10]
  i1760.sortingFudge = i1761[11]
  i1760.minParticleSize = i1761[12]
  i1760.maxParticleSize = i1761[13]
  i1760.pivot = new pc.Vec3( i1761[14], i1761[15], i1761[16] )
  request.r(i1761[17], i1761[18], 0, i1760, 'trailMaterial')
  i1760.applyActiveColorSpace = !!i1761[19]
  i1760.enabled = !!i1761[20]
  request.r(i1761[21], i1761[22], 0, i1760, 'sharedMaterial')
  var i1763 = i1761[23]
  var i1762 = []
  for(var i = 0; i < i1763.length; i += 2) {
  request.r(i1763[i + 0], i1763[i + 1], 2, i1762, '')
  }
  i1760.sharedMaterials = i1762
  i1760.receiveShadows = !!i1761[24]
  i1760.shadowCastingMode = i1761[25]
  i1760.sortingLayerID = i1761[26]
  i1760.sortingOrder = i1761[27]
  i1760.lightmapIndex = i1761[28]
  i1760.lightmapSceneIndex = i1761[29]
  i1760.lightmapScaleOffset = new pc.Vec4( i1761[30], i1761[31], i1761[32], i1761[33] )
  i1760.lightProbeUsage = i1761[34]
  i1760.reflectionProbeUsage = i1761[35]
  return i1760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1765 = data
  i1764.name = i1765[0]
  i1764.atlasId = i1765[1]
  i1764.mipmapCount = i1765[2]
  i1764.hdr = !!i1765[3]
  i1764.size = i1765[4]
  i1764.anisoLevel = i1765[5]
  i1764.filterMode = i1765[6]
  var i1767 = i1765[7]
  var i1766 = []
  for(var i = 0; i < i1767.length; i += 4) {
    i1766.push( UnityEngine.Rect.MinMaxRect(i1767[i + 0], i1767[i + 1], i1767[i + 2], i1767[i + 3]) );
  }
  i1764.rects = i1766
  i1764.wrapU = i1765[8]
  i1764.wrapV = i1765[9]
  return i1764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1771 = data
  i1770.name = i1771[0]
  i1770.index = i1771[1]
  i1770.startup = !!i1771[2]
  return i1770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1773 = data
  i1772.aspect = i1773[0]
  i1772.orthographic = !!i1773[1]
  i1772.orthographicSize = i1773[2]
  i1772.backgroundColor = new pc.Color(i1773[3], i1773[4], i1773[5], i1773[6])
  i1772.nearClipPlane = i1773[7]
  i1772.farClipPlane = i1773[8]
  i1772.fieldOfView = i1773[9]
  i1772.depth = i1773[10]
  i1772.clearFlags = i1773[11]
  i1772.cullingMask = i1773[12]
  i1772.rect = i1773[13]
  request.r(i1773[14], i1773[15], 0, i1772, 'targetTexture')
  i1772.usePhysicalProperties = !!i1773[16]
  i1772.focalLength = i1773[17]
  i1772.sensorSize = new pc.Vec2( i1773[18], i1773[19] )
  i1772.lensShift = new pc.Vec2( i1773[20], i1773[21] )
  i1772.gateFit = i1773[22]
  i1772.commandBufferCount = i1773[23]
  i1772.cameraType = i1773[24]
  i1772.enabled = !!i1773[25]
  return i1772
}

Deserializers["UnityEngine.EventSystems.PhysicsRaycaster"] = function (request, data, root) {
  var i1774 = root || request.c( 'UnityEngine.EventSystems.PhysicsRaycaster' )
  var i1775 = data
  i1774.m_EventMask = UnityEngine.LayerMask.FromIntegerValue( i1775[0] )
  i1774.m_MaxRayIntersections = i1775[1]
  return i1774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1777 = data
  i1776.type = i1777[0]
  i1776.color = new pc.Color(i1777[1], i1777[2], i1777[3], i1777[4])
  i1776.cullingMask = i1777[5]
  i1776.intensity = i1777[6]
  i1776.range = i1777[7]
  i1776.spotAngle = i1777[8]
  i1776.shadows = i1777[9]
  i1776.shadowNormalBias = i1777[10]
  i1776.shadowBias = i1777[11]
  i1776.shadowStrength = i1777[12]
  i1776.shadowResolution = i1777[13]
  i1776.lightmapBakeType = i1777[14]
  i1776.renderMode = i1777[15]
  request.r(i1777[16], i1777[17], 0, i1776, 'cookie')
  i1776.cookieSize = i1777[18]
  i1776.shadowNearPlane = i1777[19]
  i1776.occlusionMaskChannel = i1777[20]
  i1776.isBaked = !!i1777[21]
  i1776.mixedLightingMode = i1777[22]
  i1776.enabled = !!i1777[23]
  return i1776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1779 = data
  i1778.pivot = new pc.Vec2( i1779[0], i1779[1] )
  i1778.anchorMin = new pc.Vec2( i1779[2], i1779[3] )
  i1778.anchorMax = new pc.Vec2( i1779[4], i1779[5] )
  i1778.sizeDelta = new pc.Vec2( i1779[6], i1779[7] )
  i1778.anchoredPosition3D = new pc.Vec3( i1779[8], i1779[9], i1779[10] )
  i1778.rotation = new pc.Quat(i1779[11], i1779[12], i1779[13], i1779[14])
  i1778.scale = new pc.Vec3( i1779[15], i1779[16], i1779[17] )
  return i1778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1781 = data
  i1780.planeDistance = i1781[0]
  i1780.referencePixelsPerUnit = i1781[1]
  i1780.isFallbackOverlay = !!i1781[2]
  i1780.renderMode = i1781[3]
  i1780.renderOrder = i1781[4]
  i1780.sortingLayerName = i1781[5]
  i1780.sortingOrder = i1781[6]
  i1780.scaleFactor = i1781[7]
  request.r(i1781[8], i1781[9], 0, i1780, 'worldCamera')
  i1780.overrideSorting = !!i1781[10]
  i1780.pixelPerfect = !!i1781[11]
  i1780.targetDisplay = i1781[12]
  i1780.overridePixelPerfect = !!i1781[13]
  i1780.enabled = !!i1781[14]
  return i1780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1783 = data
  i1782.cullTransparentMesh = !!i1783[0]
  return i1782
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1784 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1785 = data
  i1784.m_UiScaleMode = i1785[0]
  i1784.m_ReferencePixelsPerUnit = i1785[1]
  i1784.m_ScaleFactor = i1785[2]
  i1784.m_ReferenceResolution = new pc.Vec2( i1785[3], i1785[4] )
  i1784.m_ScreenMatchMode = i1785[5]
  i1784.m_MatchWidthOrHeight = i1785[6]
  i1784.m_PhysicalUnit = i1785[7]
  i1784.m_FallbackScreenDPI = i1785[8]
  i1784.m_DefaultSpriteDPI = i1785[9]
  i1784.m_DynamicPixelsPerUnit = i1785[10]
  i1784.m_PresetInfoIsWorld = !!i1785[11]
  return i1784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1787 = data
  i1786.m_Alpha = i1787[0]
  i1786.m_Interactable = !!i1787[1]
  i1786.m_BlocksRaycasts = !!i1787[2]
  i1786.m_IgnoreParentGroups = !!i1787[3]
  i1786.enabled = !!i1787[4]
  return i1786
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1788 = root || request.c( 'UnityEngine.UI.Image' )
  var i1789 = data
  request.r(i1789[0], i1789[1], 0, i1788, 'm_Sprite')
  i1788.m_Type = i1789[2]
  i1788.m_PreserveAspect = !!i1789[3]
  i1788.m_FillCenter = !!i1789[4]
  i1788.m_FillMethod = i1789[5]
  i1788.m_FillAmount = i1789[6]
  i1788.m_FillClockwise = !!i1789[7]
  i1788.m_FillOrigin = i1789[8]
  i1788.m_UseSpriteMesh = !!i1789[9]
  i1788.m_PixelsPerUnitMultiplier = i1789[10]
  request.r(i1789[11], i1789[12], 0, i1788, 'm_Material')
  i1788.m_Maskable = !!i1789[13]
  i1788.m_Color = new pc.Color(i1789[14], i1789[15], i1789[16], i1789[17])
  i1788.m_RaycastTarget = !!i1789[18]
  i1788.m_RaycastPadding = new pc.Vec4( i1789[19], i1789[20], i1789[21], i1789[22] )
  return i1788
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1790 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1791 = data
  i1790.m_IgnoreReversedGraphics = !!i1791[0]
  i1790.m_BlockingObjects = i1791[1]
  i1790.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1791[2] )
  return i1790
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1792 = root || request.c( 'UnityEngine.UI.Button' )
  var i1793 = data
  i1792.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1793[0], i1792.m_OnClick)
  i1792.m_Navigation = request.d('UnityEngine.UI.Navigation', i1793[1], i1792.m_Navigation)
  i1792.m_Transition = i1793[2]
  i1792.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1793[3], i1792.m_Colors)
  i1792.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1793[4], i1792.m_SpriteState)
  i1792.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1793[5], i1792.m_AnimationTriggers)
  i1792.m_Interactable = !!i1793[6]
  request.r(i1793[7], i1793[8], 0, i1792, 'm_TargetGraphic')
  return i1792
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1794 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1795 = data
  i1794.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1795[0], i1794.m_PersistentCalls)
  return i1794
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1796 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1797 = data
  var i1799 = i1797[0]
  var i1798 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1799.length; i += 1) {
    i1798.add(request.d('UnityEngine.Events.PersistentCall', i1799[i + 0]));
  }
  i1796.m_Calls = i1798
  return i1796
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1802 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1803 = data
  request.r(i1803[0], i1803[1], 0, i1802, 'm_Target')
  i1802.m_TargetAssemblyTypeName = i1803[2]
  i1802.m_MethodName = i1803[3]
  i1802.m_Mode = i1803[4]
  i1802.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1803[5], i1802.m_Arguments)
  i1802.m_CallState = i1803[6]
  return i1802
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1804 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1805 = data
  i1804.m_Mode = i1805[0]
  i1804.m_WrapAround = !!i1805[1]
  request.r(i1805[2], i1805[3], 0, i1804, 'm_SelectOnUp')
  request.r(i1805[4], i1805[5], 0, i1804, 'm_SelectOnDown')
  request.r(i1805[6], i1805[7], 0, i1804, 'm_SelectOnLeft')
  request.r(i1805[8], i1805[9], 0, i1804, 'm_SelectOnRight')
  return i1804
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1806 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1807 = data
  i1806.m_NormalColor = new pc.Color(i1807[0], i1807[1], i1807[2], i1807[3])
  i1806.m_HighlightedColor = new pc.Color(i1807[4], i1807[5], i1807[6], i1807[7])
  i1806.m_PressedColor = new pc.Color(i1807[8], i1807[9], i1807[10], i1807[11])
  i1806.m_SelectedColor = new pc.Color(i1807[12], i1807[13], i1807[14], i1807[15])
  i1806.m_DisabledColor = new pc.Color(i1807[16], i1807[17], i1807[18], i1807[19])
  i1806.m_ColorMultiplier = i1807[20]
  i1806.m_FadeDuration = i1807[21]
  return i1806
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1808 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1809 = data
  request.r(i1809[0], i1809[1], 0, i1808, 'm_HighlightedSprite')
  request.r(i1809[2], i1809[3], 0, i1808, 'm_PressedSprite')
  request.r(i1809[4], i1809[5], 0, i1808, 'm_SelectedSprite')
  request.r(i1809[6], i1809[7], 0, i1808, 'm_DisabledSprite')
  return i1808
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1810 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1811 = data
  i1810.m_NormalTrigger = i1811[0]
  i1810.m_HighlightedTrigger = i1811[1]
  i1810.m_PressedTrigger = i1811[2]
  i1810.m_SelectedTrigger = i1811[3]
  i1810.m_DisabledTrigger = i1811[4]
  return i1810
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1812 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1813 = data
  i1812.m_ShowMaskGraphic = !!i1813[0]
  return i1812
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1814 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1815 = data
  i1814.m_hasFontAssetChanged = !!i1815[0]
  request.r(i1815[1], i1815[2], 0, i1814, 'm_baseMaterial')
  i1814.m_maskOffset = new pc.Vec4( i1815[3], i1815[4], i1815[5], i1815[6] )
  i1814.m_text = i1815[7]
  i1814.m_isRightToLeft = !!i1815[8]
  request.r(i1815[9], i1815[10], 0, i1814, 'm_fontAsset')
  request.r(i1815[11], i1815[12], 0, i1814, 'm_sharedMaterial')
  var i1817 = i1815[13]
  var i1816 = []
  for(var i = 0; i < i1817.length; i += 2) {
  request.r(i1817[i + 0], i1817[i + 1], 2, i1816, '')
  }
  i1814.m_fontSharedMaterials = i1816
  request.r(i1815[14], i1815[15], 0, i1814, 'm_fontMaterial')
  var i1819 = i1815[16]
  var i1818 = []
  for(var i = 0; i < i1819.length; i += 2) {
  request.r(i1819[i + 0], i1819[i + 1], 2, i1818, '')
  }
  i1814.m_fontMaterials = i1818
  i1814.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1815[17], i1815[18], i1815[19], i1815[20])
  i1814.m_fontColor = new pc.Color(i1815[21], i1815[22], i1815[23], i1815[24])
  i1814.m_enableVertexGradient = !!i1815[25]
  i1814.m_colorMode = i1815[26]
  i1814.m_fontColorGradient = request.d('TMPro.VertexGradient', i1815[27], i1814.m_fontColorGradient)
  request.r(i1815[28], i1815[29], 0, i1814, 'm_fontColorGradientPreset')
  request.r(i1815[30], i1815[31], 0, i1814, 'm_spriteAsset')
  i1814.m_tintAllSprites = !!i1815[32]
  request.r(i1815[33], i1815[34], 0, i1814, 'm_StyleSheet')
  i1814.m_TextStyleHashCode = i1815[35]
  i1814.m_overrideHtmlColors = !!i1815[36]
  i1814.m_faceColor = UnityEngine.Color32.ConstructColor(i1815[37], i1815[38], i1815[39], i1815[40])
  i1814.m_fontSize = i1815[41]
  i1814.m_fontSizeBase = i1815[42]
  i1814.m_fontWeight = i1815[43]
  i1814.m_enableAutoSizing = !!i1815[44]
  i1814.m_fontSizeMin = i1815[45]
  i1814.m_fontSizeMax = i1815[46]
  i1814.m_fontStyle = i1815[47]
  i1814.m_HorizontalAlignment = i1815[48]
  i1814.m_VerticalAlignment = i1815[49]
  i1814.m_textAlignment = i1815[50]
  i1814.m_characterSpacing = i1815[51]
  i1814.m_wordSpacing = i1815[52]
  i1814.m_lineSpacing = i1815[53]
  i1814.m_lineSpacingMax = i1815[54]
  i1814.m_paragraphSpacing = i1815[55]
  i1814.m_charWidthMaxAdj = i1815[56]
  i1814.m_enableWordWrapping = !!i1815[57]
  i1814.m_wordWrappingRatios = i1815[58]
  i1814.m_overflowMode = i1815[59]
  request.r(i1815[60], i1815[61], 0, i1814, 'm_linkedTextComponent')
  request.r(i1815[62], i1815[63], 0, i1814, 'parentLinkedComponent')
  i1814.m_enableKerning = !!i1815[64]
  i1814.m_enableExtraPadding = !!i1815[65]
  i1814.checkPaddingRequired = !!i1815[66]
  i1814.m_isRichText = !!i1815[67]
  i1814.m_parseCtrlCharacters = !!i1815[68]
  i1814.m_isOrthographic = !!i1815[69]
  i1814.m_isCullingEnabled = !!i1815[70]
  i1814.m_horizontalMapping = i1815[71]
  i1814.m_verticalMapping = i1815[72]
  i1814.m_uvLineOffset = i1815[73]
  i1814.m_geometrySortingOrder = i1815[74]
  i1814.m_IsTextObjectScaleStatic = !!i1815[75]
  i1814.m_VertexBufferAutoSizeReduction = !!i1815[76]
  i1814.m_useMaxVisibleDescender = !!i1815[77]
  i1814.m_pageToDisplay = i1815[78]
  i1814.m_margin = new pc.Vec4( i1815[79], i1815[80], i1815[81], i1815[82] )
  i1814.m_isUsingLegacyAnimationComponent = !!i1815[83]
  i1814.m_isVolumetricText = !!i1815[84]
  request.r(i1815[85], i1815[86], 0, i1814, 'm_Material')
  i1814.m_Maskable = !!i1815[87]
  i1814.m_Color = new pc.Color(i1815[88], i1815[89], i1815[90], i1815[91])
  i1814.m_RaycastTarget = !!i1815[92]
  i1814.m_RaycastPadding = new pc.Vec4( i1815[93], i1815[94], i1815[95], i1815[96] )
  return i1814
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1820 = root || request.c( 'TMPro.VertexGradient' )
  var i1821 = data
  i1820.topLeft = new pc.Color(i1821[0], i1821[1], i1821[2], i1821[3])
  i1820.topRight = new pc.Color(i1821[4], i1821[5], i1821[6], i1821[7])
  i1820.bottomLeft = new pc.Color(i1821[8], i1821[9], i1821[10], i1821[11])
  i1820.bottomRight = new pc.Color(i1821[12], i1821[13], i1821[14], i1821[15])
  return i1820
}

Deserializers["Project.Scripts.Core.GameController"] = function (request, data, root) {
  var i1822 = root || request.c( 'Project.Scripts.Core.GameController' )
  var i1823 = data
  request.r(i1823[0], i1823[1], 0, i1822, '_config')
  request.r(i1823[2], i1823[3], 0, i1822, '_levelData')
  request.r(i1823[4], i1823[5], 0, i1822, '_gameBoard')
  request.r(i1823[6], i1823[7], 0, i1822, '_chainReactionSystem')
  request.r(i1823[8], i1823[9], 0, i1822, '_tutorialGuide')
  request.r(i1823[10], i1823[11], 0, i1822, '_packshotScreen')
  request.r(i1823[12], i1823[13], 0, i1822, '_defeatScreen')
  return i1822
}

Deserializers["Project.Scripts.Core.GameBoard"] = function (request, data, root) {
  var i1824 = root || request.c( 'Project.Scripts.Core.GameBoard' )
  var i1825 = data
  request.r(i1825[0], i1825[1], 0, i1824, '_elementPrefab')
  var i1827 = i1825[2]
  var i1826 = []
  for(var i = 0; i < i1827.length; i += 2) {
  request.r(i1827[i + 0], i1827[i + 1], 2, i1826, '')
  }
  i1824._playerStackSlots = i1826
  request.r(i1825[3], i1825[4], 0, i1824, '_cellPrefab')
  request.r(i1825[5], i1825[6], 0, i1824, '_stackPrefab')
  request.r(i1825[7], i1825[8], 0, i1824, '_materialMap')
  return i1824
}

Deserializers["Project.Scripts.Tutorial.TutorialGuide"] = function (request, data, root) {
  var i1830 = root || request.c( 'Project.Scripts.Tutorial.TutorialGuide' )
  var i1831 = data
  request.r(i1831[0], i1831[1], 0, i1830, '_hand')
  return i1830
}

Deserializers["Project.Scripts.Core.ChainReactionSystem"] = function (request, data, root) {
  var i1832 = root || request.c( 'Project.Scripts.Core.ChainReactionSystem' )
  var i1833 = data
  request.r(i1833[0], i1833[1], 0, i1832, '_particlePrefab')
  return i1832
}

Deserializers["Project.Scripts.Core.PackshotScreen"] = function (request, data, root) {
  var i1834 = root || request.c( 'Project.Scripts.Core.PackshotScreen' )
  var i1835 = data
  request.r(i1835[0], i1835[1], 0, i1834, '_packshotGroup')
  request.r(i1835[2], i1835[3], 0, i1834, '_packshotButton')
  request.r(i1835[4], i1835[5], 0, i1834, '_hexagonMask')
  request.r(i1835[6], i1835[7], 0, i1834, '_hexagonBorder')
  request.r(i1835[8], i1835[9], 0, i1834, '_borderCanvasGroup')
  return i1834
}

Deserializers["Project.Scripts.Core.DefeatScreen"] = function (request, data, root) {
  var i1836 = root || request.c( 'Project.Scripts.Core.DefeatScreen' )
  var i1837 = data
  request.r(i1837[0], i1837[1], 0, i1836, '_defeatGroup')
  return i1836
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1838 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1839 = data
  request.r(i1839[0], i1839[1], 0, i1838, 'm_FirstSelected')
  i1838.m_sendNavigationEvents = !!i1839[2]
  i1838.m_DragThreshold = i1839[3]
  return i1838
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1840 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1841 = data
  i1840.m_HorizontalAxis = i1841[0]
  i1840.m_VerticalAxis = i1841[1]
  i1840.m_SubmitButton = i1841[2]
  i1840.m_CancelButton = i1841[3]
  i1840.m_InputActionsPerSecond = i1841[4]
  i1840.m_RepeatDelay = i1841[5]
  i1840.m_ForceModuleActive = !!i1841[6]
  i1840.m_SendPointerHoverToParent = !!i1841[7]
  return i1840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1843 = data
  i1842.ambientIntensity = i1843[0]
  i1842.reflectionIntensity = i1843[1]
  i1842.ambientMode = i1843[2]
  i1842.ambientLight = new pc.Color(i1843[3], i1843[4], i1843[5], i1843[6])
  i1842.ambientSkyColor = new pc.Color(i1843[7], i1843[8], i1843[9], i1843[10])
  i1842.ambientGroundColor = new pc.Color(i1843[11], i1843[12], i1843[13], i1843[14])
  i1842.ambientEquatorColor = new pc.Color(i1843[15], i1843[16], i1843[17], i1843[18])
  i1842.fogColor = new pc.Color(i1843[19], i1843[20], i1843[21], i1843[22])
  i1842.fogEndDistance = i1843[23]
  i1842.fogStartDistance = i1843[24]
  i1842.fogDensity = i1843[25]
  i1842.fog = !!i1843[26]
  request.r(i1843[27], i1843[28], 0, i1842, 'skybox')
  i1842.fogMode = i1843[29]
  var i1845 = i1843[30]
  var i1844 = []
  for(var i = 0; i < i1845.length; i += 1) {
    i1844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1845[i + 0]) );
  }
  i1842.lightmaps = i1844
  i1842.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1843[31], i1842.lightProbes)
  i1842.lightmapsMode = i1843[32]
  i1842.mixedBakeMode = i1843[33]
  i1842.environmentLightingMode = i1843[34]
  i1842.ambientProbe = new pc.SphericalHarmonicsL2(i1843[35])
  request.r(i1843[36], i1843[37], 0, i1842, 'customReflection')
  request.r(i1843[38], i1843[39], 0, i1842, 'defaultReflection')
  i1842.defaultReflectionMode = i1843[40]
  i1842.defaultReflectionResolution = i1843[41]
  i1842.sunLightObjectId = i1843[42]
  i1842.pixelLightCount = i1843[43]
  i1842.defaultReflectionHDR = !!i1843[44]
  i1842.hasLightDataAsset = !!i1843[45]
  i1842.hasManualGenerate = !!i1843[46]
  return i1842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1849 = data
  request.r(i1849[0], i1849[1], 0, i1848, 'lightmapColor')
  request.r(i1849[2], i1849[3], 0, i1848, 'lightmapDirection')
  request.r(i1849[4], i1849[5], 0, i1848, 'shadowMask')
  return i1848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1850 = root || new UnityEngine.LightProbes()
  var i1851 = data
  return i1850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1859 = data
  var i1861 = i1859[0]
  var i1860 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1861.length; i += 1) {
    i1860.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1861[i + 0]));
  }
  i1858.ShaderCompilationErrors = i1860
  i1858.name = i1859[1]
  i1858.guid = i1859[2]
  var i1863 = i1859[3]
  var i1862 = []
  for(var i = 0; i < i1863.length; i += 1) {
    i1862.push( i1863[i + 0] );
  }
  i1858.shaderDefinedKeywords = i1862
  var i1865 = i1859[4]
  var i1864 = []
  for(var i = 0; i < i1865.length; i += 1) {
    i1864.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1865[i + 0]) );
  }
  i1858.passes = i1864
  var i1867 = i1859[5]
  var i1866 = []
  for(var i = 0; i < i1867.length; i += 1) {
    i1866.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1867[i + 0]) );
  }
  i1858.usePasses = i1866
  var i1869 = i1859[6]
  var i1868 = []
  for(var i = 0; i < i1869.length; i += 1) {
    i1868.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1869[i + 0]) );
  }
  i1858.defaultParameterValues = i1868
  request.r(i1859[7], i1859[8], 0, i1858, 'unityFallbackShader')
  i1858.readDepth = !!i1859[9]
  i1858.hasDepthOnlyPass = !!i1859[10]
  i1858.isCreatedByShaderGraph = !!i1859[11]
  i1858.disableBatching = !!i1859[12]
  i1858.compiled = !!i1859[13]
  return i1858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1873 = data
  i1872.shaderName = i1873[0]
  i1872.errorMessage = i1873[1]
  return i1872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1878 = root || new pc.UnityShaderPass()
  var i1879 = data
  i1878.id = i1879[0]
  i1878.subShaderIndex = i1879[1]
  i1878.name = i1879[2]
  i1878.passType = i1879[3]
  i1878.grabPassTextureName = i1879[4]
  i1878.usePass = !!i1879[5]
  i1878.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1879[6], i1878.zTest)
  i1878.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1879[7], i1878.zWrite)
  i1878.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1879[8], i1878.culling)
  i1878.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1879[9], i1878.blending)
  i1878.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1879[10], i1878.alphaBlending)
  i1878.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1879[11], i1878.colorWriteMask)
  i1878.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1879[12], i1878.offsetUnits)
  i1878.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1879[13], i1878.offsetFactor)
  i1878.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1879[14], i1878.stencilRef)
  i1878.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1879[15], i1878.stencilReadMask)
  i1878.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1879[16], i1878.stencilWriteMask)
  i1878.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1879[17], i1878.stencilOp)
  i1878.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1879[18], i1878.stencilOpFront)
  i1878.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1879[19], i1878.stencilOpBack)
  var i1881 = i1879[20]
  var i1880 = []
  for(var i = 0; i < i1881.length; i += 1) {
    i1880.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1881[i + 0]) );
  }
  i1878.tags = i1880
  var i1883 = i1879[21]
  var i1882 = []
  for(var i = 0; i < i1883.length; i += 1) {
    i1882.push( i1883[i + 0] );
  }
  i1878.passDefinedKeywords = i1882
  var i1885 = i1879[22]
  var i1884 = []
  for(var i = 0; i < i1885.length; i += 1) {
    i1884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1885[i + 0]) );
  }
  i1878.passDefinedKeywordGroups = i1884
  var i1887 = i1879[23]
  var i1886 = []
  for(var i = 0; i < i1887.length; i += 1) {
    i1886.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1887[i + 0]) );
  }
  i1878.variants = i1886
  var i1889 = i1879[24]
  var i1888 = []
  for(var i = 0; i < i1889.length; i += 1) {
    i1888.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1889[i + 0]) );
  }
  i1878.excludedVariants = i1888
  i1878.hasDepthReader = !!i1879[25]
  return i1878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1891 = data
  i1890.val = i1891[0]
  i1890.name = i1891[1]
  return i1890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1893 = data
  i1892.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1893[0], i1892.src)
  i1892.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1893[1], i1892.dst)
  i1892.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1893[2], i1892.op)
  return i1892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1895 = data
  i1894.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1895[0], i1894.pass)
  i1894.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1895[1], i1894.fail)
  i1894.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1895[2], i1894.zFail)
  i1894.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1895[3], i1894.comp)
  return i1894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1899 = data
  i1898.name = i1899[0]
  i1898.value = i1899[1]
  return i1898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1903 = data
  var i1905 = i1903[0]
  var i1904 = []
  for(var i = 0; i < i1905.length; i += 1) {
    i1904.push( i1905[i + 0] );
  }
  i1902.keywords = i1904
  i1902.hasDiscard = !!i1903[1]
  return i1902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1909 = data
  i1908.passId = i1909[0]
  i1908.subShaderIndex = i1909[1]
  var i1911 = i1909[2]
  var i1910 = []
  for(var i = 0; i < i1911.length; i += 1) {
    i1910.push( i1911[i + 0] );
  }
  i1908.keywords = i1910
  i1908.vertexProgram = i1909[3]
  i1908.fragmentProgram = i1909[4]
  i1908.exportedForWebGl2 = !!i1909[5]
  i1908.readDepth = !!i1909[6]
  return i1908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1915 = data
  request.r(i1915[0], i1915[1], 0, i1914, 'shader')
  i1914.pass = i1915[2]
  return i1914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1919 = data
  i1918.name = i1919[0]
  i1918.type = i1919[1]
  i1918.value = new pc.Vec4( i1919[2], i1919[3], i1919[4], i1919[5] )
  i1918.textureValue = i1919[6]
  i1918.shaderPropertyFlag = i1919[7]
  return i1918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1921 = data
  i1920.name = i1921[0]
  request.r(i1921[1], i1921[2], 0, i1920, 'texture')
  i1920.aabb = i1921[3]
  i1920.vertices = i1921[4]
  i1920.triangles = i1921[5]
  i1920.textureRect = UnityEngine.Rect.MinMaxRect(i1921[6], i1921[7], i1921[8], i1921[9])
  i1920.packedRect = UnityEngine.Rect.MinMaxRect(i1921[10], i1921[11], i1921[12], i1921[13])
  i1920.border = new pc.Vec4( i1921[14], i1921[15], i1921[16], i1921[17] )
  i1920.transparency = i1921[18]
  i1920.bounds = i1921[19]
  i1920.pixelsPerUnit = i1921[20]
  i1920.textureWidth = i1921[21]
  i1920.textureHeight = i1921[22]
  i1920.nativeSize = new pc.Vec2( i1921[23], i1921[24] )
  i1920.pivot = new pc.Vec2( i1921[25], i1921[26] )
  i1920.textureRectOffset = new pc.Vec2( i1921[27], i1921[28] )
  return i1920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1923 = data
  i1922.name = i1923[0]
  i1922.ascent = i1923[1]
  i1922.originalLineHeight = i1923[2]
  i1922.fontSize = i1923[3]
  var i1925 = i1923[4]
  var i1924 = []
  for(var i = 0; i < i1925.length; i += 1) {
    i1924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1925[i + 0]) );
  }
  i1922.characterInfo = i1924
  request.r(i1923[5], i1923[6], 0, i1922, 'texture')
  i1922.originalFontSize = i1923[7]
  return i1922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1929 = data
  i1928.index = i1929[0]
  i1928.advance = i1929[1]
  i1928.bearing = i1929[2]
  i1928.glyphWidth = i1929[3]
  i1928.glyphHeight = i1929[4]
  i1928.minX = i1929[5]
  i1928.maxX = i1929[6]
  i1928.minY = i1929[7]
  i1928.maxY = i1929[8]
  i1928.uvBottomLeftX = i1929[9]
  i1928.uvBottomLeftY = i1929[10]
  i1928.uvBottomRightX = i1929[11]
  i1928.uvBottomRightY = i1929[12]
  i1928.uvTopLeftX = i1929[13]
  i1928.uvTopLeftY = i1929[14]
  i1928.uvTopRightX = i1929[15]
  i1928.uvTopRightY = i1929[16]
  return i1928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1931 = data
  i1930.name = i1931[0]
  i1930.bytes64 = i1931[1]
  i1930.data = i1931[2]
  return i1930
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1932 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1933 = data
  request.r(i1933[0], i1933[1], 0, i1932, 'atlas')
  i1932.normalStyle = i1933[2]
  i1932.normalSpacingOffset = i1933[3]
  i1932.boldStyle = i1933[4]
  i1932.boldSpacing = i1933[5]
  i1932.italicStyle = i1933[6]
  i1932.tabSize = i1933[7]
  i1932.hashCode = i1933[8]
  request.r(i1933[9], i1933[10], 0, i1932, 'material')
  i1932.materialHashCode = i1933[11]
  i1932.m_Version = i1933[12]
  i1932.m_SourceFontFileGUID = i1933[13]
  request.r(i1933[14], i1933[15], 0, i1932, 'm_SourceFontFile_EditorRef')
  request.r(i1933[16], i1933[17], 0, i1932, 'm_SourceFontFile')
  i1932.m_AtlasPopulationMode = i1933[18]
  i1932.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1933[19], i1932.m_FaceInfo)
  var i1935 = i1933[20]
  var i1934 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1935.length; i += 1) {
    i1934.add(request.d('UnityEngine.TextCore.Glyph', i1935[i + 0]));
  }
  i1932.m_GlyphTable = i1934
  var i1937 = i1933[21]
  var i1936 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1937.length; i += 1) {
    i1936.add(request.d('TMPro.TMP_Character', i1937[i + 0]));
  }
  i1932.m_CharacterTable = i1936
  var i1939 = i1933[22]
  var i1938 = []
  for(var i = 0; i < i1939.length; i += 2) {
  request.r(i1939[i + 0], i1939[i + 1], 2, i1938, '')
  }
  i1932.m_AtlasTextures = i1938
  i1932.m_AtlasTextureIndex = i1933[23]
  i1932.m_IsMultiAtlasTexturesEnabled = !!i1933[24]
  i1932.m_ClearDynamicDataOnBuild = !!i1933[25]
  var i1941 = i1933[26]
  var i1940 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1941.length; i += 1) {
    i1940.add(request.d('UnityEngine.TextCore.GlyphRect', i1941[i + 0]));
  }
  i1932.m_UsedGlyphRects = i1940
  var i1943 = i1933[27]
  var i1942 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1943.length; i += 1) {
    i1942.add(request.d('UnityEngine.TextCore.GlyphRect', i1943[i + 0]));
  }
  i1932.m_FreeGlyphRects = i1942
  i1932.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1933[28], i1932.m_fontInfo)
  i1932.m_AtlasWidth = i1933[29]
  i1932.m_AtlasHeight = i1933[30]
  i1932.m_AtlasPadding = i1933[31]
  i1932.m_AtlasRenderMode = i1933[32]
  var i1945 = i1933[33]
  var i1944 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1945.length; i += 1) {
    i1944.add(request.d('TMPro.TMP_Glyph', i1945[i + 0]));
  }
  i1932.m_glyphInfoList = i1944
  i1932.m_KerningTable = request.d('TMPro.KerningTable', i1933[34], i1932.m_KerningTable)
  i1932.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1933[35], i1932.m_FontFeatureTable)
  var i1947 = i1933[36]
  var i1946 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1947.length; i += 2) {
  request.r(i1947[i + 0], i1947[i + 1], 1, i1946, '')
  }
  i1932.fallbackFontAssets = i1946
  var i1949 = i1933[37]
  var i1948 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1949.length; i += 2) {
  request.r(i1949[i + 0], i1949[i + 1], 1, i1948, '')
  }
  i1932.m_FallbackFontAssetTable = i1948
  i1932.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1933[38], i1932.m_CreationSettings)
  var i1951 = i1933[39]
  var i1950 = []
  for(var i = 0; i < i1951.length; i += 1) {
    i1950.push( request.d('TMPro.TMP_FontWeightPair', i1951[i + 0]) );
  }
  i1932.m_FontWeightTable = i1950
  var i1953 = i1933[40]
  var i1952 = []
  for(var i = 0; i < i1953.length; i += 1) {
    i1952.push( request.d('TMPro.TMP_FontWeightPair', i1953[i + 0]) );
  }
  i1932.fontWeights = i1952
  return i1932
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1954 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1955 = data
  i1954.m_FaceIndex = i1955[0]
  i1954.m_FamilyName = i1955[1]
  i1954.m_StyleName = i1955[2]
  i1954.m_PointSize = i1955[3]
  i1954.m_Scale = i1955[4]
  i1954.m_UnitsPerEM = i1955[5]
  i1954.m_LineHeight = i1955[6]
  i1954.m_AscentLine = i1955[7]
  i1954.m_CapLine = i1955[8]
  i1954.m_MeanLine = i1955[9]
  i1954.m_Baseline = i1955[10]
  i1954.m_DescentLine = i1955[11]
  i1954.m_SuperscriptOffset = i1955[12]
  i1954.m_SuperscriptSize = i1955[13]
  i1954.m_SubscriptOffset = i1955[14]
  i1954.m_SubscriptSize = i1955[15]
  i1954.m_UnderlineOffset = i1955[16]
  i1954.m_UnderlineThickness = i1955[17]
  i1954.m_StrikethroughOffset = i1955[18]
  i1954.m_StrikethroughThickness = i1955[19]
  i1954.m_TabWidth = i1955[20]
  return i1954
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1958 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1959 = data
  i1958.m_Index = i1959[0]
  i1958.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1959[1], i1958.m_Metrics)
  i1958.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1959[2], i1958.m_GlyphRect)
  i1958.m_Scale = i1959[3]
  i1958.m_AtlasIndex = i1959[4]
  i1958.m_ClassDefinitionType = i1959[5]
  return i1958
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1960 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1961 = data
  i1960.m_Width = i1961[0]
  i1960.m_Height = i1961[1]
  i1960.m_HorizontalBearingX = i1961[2]
  i1960.m_HorizontalBearingY = i1961[3]
  i1960.m_HorizontalAdvance = i1961[4]
  return i1960
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1962 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1963 = data
  i1962.m_X = i1963[0]
  i1962.m_Y = i1963[1]
  i1962.m_Width = i1963[2]
  i1962.m_Height = i1963[3]
  return i1962
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1966 = root || request.c( 'TMPro.TMP_Character' )
  var i1967 = data
  i1966.m_ElementType = i1967[0]
  i1966.m_Unicode = i1967[1]
  i1966.m_GlyphIndex = i1967[2]
  i1966.m_Scale = i1967[3]
  return i1966
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1972 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1973 = data
  i1972.Name = i1973[0]
  i1972.PointSize = i1973[1]
  i1972.Scale = i1973[2]
  i1972.CharacterCount = i1973[3]
  i1972.LineHeight = i1973[4]
  i1972.Baseline = i1973[5]
  i1972.Ascender = i1973[6]
  i1972.CapHeight = i1973[7]
  i1972.Descender = i1973[8]
  i1972.CenterLine = i1973[9]
  i1972.SuperscriptOffset = i1973[10]
  i1972.SubscriptOffset = i1973[11]
  i1972.SubSize = i1973[12]
  i1972.Underline = i1973[13]
  i1972.UnderlineThickness = i1973[14]
  i1972.strikethrough = i1973[15]
  i1972.strikethroughThickness = i1973[16]
  i1972.TabWidth = i1973[17]
  i1972.Padding = i1973[18]
  i1972.AtlasWidth = i1973[19]
  i1972.AtlasHeight = i1973[20]
  return i1972
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1976 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1977 = data
  i1976.id = i1977[0]
  i1976.x = i1977[1]
  i1976.y = i1977[2]
  i1976.width = i1977[3]
  i1976.height = i1977[4]
  i1976.xOffset = i1977[5]
  i1976.yOffset = i1977[6]
  i1976.xAdvance = i1977[7]
  i1976.scale = i1977[8]
  return i1976
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1978 = root || request.c( 'TMPro.KerningTable' )
  var i1979 = data
  var i1981 = i1979[0]
  var i1980 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1981.length; i += 1) {
    i1980.add(request.d('TMPro.KerningPair', i1981[i + 0]));
  }
  i1978.kerningPairs = i1980
  return i1978
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1984 = root || request.c( 'TMPro.KerningPair' )
  var i1985 = data
  i1984.xOffset = i1985[0]
  i1984.m_FirstGlyph = i1985[1]
  i1984.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1985[2], i1984.m_FirstGlyphAdjustments)
  i1984.m_SecondGlyph = i1985[3]
  i1984.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1985[4], i1984.m_SecondGlyphAdjustments)
  i1984.m_IgnoreSpacingAdjustments = !!i1985[5]
  return i1984
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1986 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1987 = data
  var i1989 = i1987[0]
  var i1988 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1989.length; i += 1) {
    i1988.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1989[i + 0]));
  }
  i1986.m_GlyphPairAdjustmentRecords = i1988
  return i1986
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1992 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1993 = data
  i1992.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1993[0], i1992.m_FirstAdjustmentRecord)
  i1992.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1993[1], i1992.m_SecondAdjustmentRecord)
  i1992.m_FeatureLookupFlags = i1993[2]
  return i1992
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1994 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1995 = data
  i1994.m_GlyphIndex = i1995[0]
  i1994.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1995[1], i1994.m_GlyphValueRecord)
  return i1994
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1996 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1997 = data
  i1996.m_XPlacement = i1997[0]
  i1996.m_YPlacement = i1997[1]
  i1996.m_XAdvance = i1997[2]
  i1996.m_YAdvance = i1997[3]
  return i1996
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2000 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2001 = data
  i2000.sourceFontFileName = i2001[0]
  i2000.sourceFontFileGUID = i2001[1]
  i2000.pointSizeSamplingMode = i2001[2]
  i2000.pointSize = i2001[3]
  i2000.padding = i2001[4]
  i2000.packingMode = i2001[5]
  i2000.atlasWidth = i2001[6]
  i2000.atlasHeight = i2001[7]
  i2000.characterSetSelectionMode = i2001[8]
  i2000.characterSequence = i2001[9]
  i2000.referencedFontAssetGUID = i2001[10]
  i2000.referencedTextAssetGUID = i2001[11]
  i2000.fontStyle = i2001[12]
  i2000.fontStyleModifier = i2001[13]
  i2000.renderMode = i2001[14]
  i2000.includeFontFeatures = !!i2001[15]
  return i2000
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2004 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2005 = data
  request.r(i2005[0], i2005[1], 0, i2004, 'regularTypeface')
  request.r(i2005[2], i2005[3], 0, i2004, 'italicTypeface')
  return i2004
}

Deserializers["Project.Scripts.Config.GameConfig"] = function (request, data, root) {
  var i2006 = root || request.c( 'Project.Scripts.Config.GameConfig' )
  var i2007 = data
  i2006._stackSize = i2007[0]
  i2006._splitPoint = i2007[1]
  i2006._elementFlyDuration = i2007[2]
  i2006._elementDisappearDuration = i2007[3]
  i2006._dragSnapDuration = i2007[4]
  i2006._returnDuration = i2007[5]
  i2006._elementJumpHeight = i2007[6]
  i2006._elementFlipAngle = i2007[7]
  i2006._speedMultiplier = i2007[8]
  i2006._delayBeforePackshot = i2007[9]
  i2006._idleDelay = i2007[10]
  return i2006
}

Deserializers["Project.Scripts.Config.LevelData"] = function (request, data, root) {
  var i2008 = root || request.c( 'Project.Scripts.Config.LevelData' )
  var i2009 = data
  var i2011 = i2009[0]
  var i2010 = new (System.Collections.Generic.List$1(Bridge.ns('Project.Scripts.Config.LevelData+CellConfig')))
  for(var i = 0; i < i2011.length; i += 1) {
    i2010.add(request.d('Project.Scripts.Config.LevelData+CellConfig', i2011[i + 0]));
  }
  i2008._cells = i2010
  var i2013 = i2009[1]
  var i2012 = new (System.Collections.Generic.List$1(Bridge.ns('Project.Scripts.Config.LevelData+PlayerStackConfig')))
  for(var i = 0; i < i2013.length; i += 1) {
    i2012.add(request.d('Project.Scripts.Config.LevelData+PlayerStackConfig', i2013[i + 0]));
  }
  i2008._playerStacks = i2012
  i2008._hexSize = i2009[2]
  request.r(i2009[3], i2009[4], 0, i2008, '_baseLayerPrefab')
  return i2008
}

Deserializers["Project.Scripts.Config.LevelData+CellConfig"] = function (request, data, root) {
  var i2016 = root || request.c( 'Project.Scripts.Config.LevelData+CellConfig' )
  var i2017 = data
  i2016.Coordinates = new pc.Vec2( i2017[0], i2017[1] )
  i2016.TopColor = i2017[2]
  i2016.BottomColor = i2017[3]
  i2016.IsFull = !!i2017[4]
  i2016.IsEmpty = !!i2017[5]
  return i2016
}

Deserializers["Project.Scripts.Config.LevelData+PlayerStackConfig"] = function (request, data, root) {
  var i2020 = root || request.c( 'Project.Scripts.Config.LevelData+PlayerStackConfig' )
  var i2021 = data
  i2020.Color = i2021[0]
  return i2020
}

Deserializers["Project.Scripts.Config.HexMaterialMap"] = function (request, data, root) {
  var i2022 = root || request.c( 'Project.Scripts.Config.HexMaterialMap' )
  var i2023 = data
  var i2025 = i2023[0]
  var i2024 = new (System.Collections.Generic.List$1(Bridge.ns('Project.Scripts.Config.HexMaterialMap+Pair')))
  for(var i = 0; i < i2025.length; i += 1) {
    i2024.add(request.d('Project.Scripts.Config.HexMaterialMap+Pair', i2025[i + 0]));
  }
  i2022._pairs = i2024
  return i2022
}

Deserializers["Project.Scripts.Config.HexMaterialMap+Pair"] = function (request, data, root) {
  var i2028 = root || request.c( 'Project.Scripts.Config.HexMaterialMap+Pair' )
  var i2029 = data
  i2028.Color = i2029[0]
  request.r(i2029[1], i2029[2], 0, i2028, 'Material')
  return i2028
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2030 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2031 = data
  i2030.useSafeMode = !!i2031[0]
  i2030.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2031[1], i2030.safeModeOptions)
  i2030.timeScale = i2031[2]
  i2030.unscaledTimeScale = i2031[3]
  i2030.useSmoothDeltaTime = !!i2031[4]
  i2030.maxSmoothUnscaledTime = i2031[5]
  i2030.rewindCallbackMode = i2031[6]
  i2030.showUnityEditorReport = !!i2031[7]
  i2030.logBehaviour = i2031[8]
  i2030.drawGizmos = !!i2031[9]
  i2030.defaultRecyclable = !!i2031[10]
  i2030.defaultAutoPlay = i2031[11]
  i2030.defaultUpdateType = i2031[12]
  i2030.defaultTimeScaleIndependent = !!i2031[13]
  i2030.defaultEaseType = i2031[14]
  i2030.defaultEaseOvershootOrAmplitude = i2031[15]
  i2030.defaultEasePeriod = i2031[16]
  i2030.defaultAutoKill = !!i2031[17]
  i2030.defaultLoopType = i2031[18]
  i2030.debugMode = !!i2031[19]
  i2030.debugStoreTargetId = !!i2031[20]
  i2030.showPreviewPanel = !!i2031[21]
  i2030.storeSettingsLocation = i2031[22]
  i2030.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2031[23], i2030.modules)
  i2030.createASMDEF = !!i2031[24]
  i2030.showPlayingTweens = !!i2031[25]
  i2030.showPausedTweens = !!i2031[26]
  return i2030
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2032 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2033 = data
  i2032.logBehaviour = i2033[0]
  i2032.nestedTweenFailureBehaviour = i2033[1]
  return i2032
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2034 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2035 = data
  i2034.showPanel = !!i2035[0]
  i2034.audioEnabled = !!i2035[1]
  i2034.physicsEnabled = !!i2035[2]
  i2034.physics2DEnabled = !!i2035[3]
  i2034.spriteEnabled = !!i2035[4]
  i2034.uiEnabled = !!i2035[5]
  i2034.textMeshProEnabled = !!i2035[6]
  i2034.tk2DEnabled = !!i2035[7]
  i2034.deAudioEnabled = !!i2035[8]
  i2034.deUnityExtendedEnabled = !!i2035[9]
  i2034.epoOutlineEnabled = !!i2035[10]
  return i2034
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2036 = root || request.c( 'TMPro.TMP_Settings' )
  var i2037 = data
  i2036.m_enableWordWrapping = !!i2037[0]
  i2036.m_enableKerning = !!i2037[1]
  i2036.m_enableExtraPadding = !!i2037[2]
  i2036.m_enableTintAllSprites = !!i2037[3]
  i2036.m_enableParseEscapeCharacters = !!i2037[4]
  i2036.m_EnableRaycastTarget = !!i2037[5]
  i2036.m_GetFontFeaturesAtRuntime = !!i2037[6]
  i2036.m_missingGlyphCharacter = i2037[7]
  i2036.m_warningsDisabled = !!i2037[8]
  request.r(i2037[9], i2037[10], 0, i2036, 'm_defaultFontAsset')
  i2036.m_defaultFontAssetPath = i2037[11]
  i2036.m_defaultFontSize = i2037[12]
  i2036.m_defaultAutoSizeMinRatio = i2037[13]
  i2036.m_defaultAutoSizeMaxRatio = i2037[14]
  i2036.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2037[15], i2037[16] )
  i2036.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2037[17], i2037[18] )
  i2036.m_autoSizeTextContainer = !!i2037[19]
  i2036.m_IsTextObjectScaleStatic = !!i2037[20]
  var i2039 = i2037[21]
  var i2038 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2039.length; i += 2) {
  request.r(i2039[i + 0], i2039[i + 1], 1, i2038, '')
  }
  i2036.m_fallbackFontAssets = i2038
  i2036.m_matchMaterialPreset = !!i2037[22]
  request.r(i2037[23], i2037[24], 0, i2036, 'm_defaultSpriteAsset')
  i2036.m_defaultSpriteAssetPath = i2037[25]
  i2036.m_enableEmojiSupport = !!i2037[26]
  i2036.m_MissingCharacterSpriteUnicode = i2037[27]
  i2036.m_defaultColorGradientPresetsPath = i2037[28]
  request.r(i2037[29], i2037[30], 0, i2036, 'm_defaultStyleSheet')
  i2036.m_StyleSheetsResourcePath = i2037[31]
  request.r(i2037[32], i2037[33], 0, i2036, 'm_leadingCharacters')
  request.r(i2037[34], i2037[35], 0, i2036, 'm_followingCharacters')
  i2036.m_UseModernHangulLineBreakingRules = !!i2037[36]
  return i2036
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2040 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2041 = data
  request.r(i2041[0], i2041[1], 0, i2040, 'spriteSheet')
  var i2043 = i2041[2]
  var i2042 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2043.length; i += 1) {
    i2042.add(request.d('TMPro.TMP_Sprite', i2043[i + 0]));
  }
  i2040.spriteInfoList = i2042
  var i2045 = i2041[3]
  var i2044 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2045.length; i += 2) {
  request.r(i2045[i + 0], i2045[i + 1], 1, i2044, '')
  }
  i2040.fallbackSpriteAssets = i2044
  i2040.hashCode = i2041[4]
  request.r(i2041[5], i2041[6], 0, i2040, 'material')
  i2040.materialHashCode = i2041[7]
  i2040.m_Version = i2041[8]
  i2040.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2041[9], i2040.m_FaceInfo)
  var i2047 = i2041[10]
  var i2046 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2047.length; i += 1) {
    i2046.add(request.d('TMPro.TMP_SpriteCharacter', i2047[i + 0]));
  }
  i2040.m_SpriteCharacterTable = i2046
  var i2049 = i2041[11]
  var i2048 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2049.length; i += 1) {
    i2048.add(request.d('TMPro.TMP_SpriteGlyph', i2049[i + 0]));
  }
  i2040.m_SpriteGlyphTable = i2048
  return i2040
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2052 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2053 = data
  i2052.name = i2053[0]
  i2052.hashCode = i2053[1]
  i2052.unicode = i2053[2]
  i2052.pivot = new pc.Vec2( i2053[3], i2053[4] )
  request.r(i2053[5], i2053[6], 0, i2052, 'sprite')
  i2052.id = i2053[7]
  i2052.x = i2053[8]
  i2052.y = i2053[9]
  i2052.width = i2053[10]
  i2052.height = i2053[11]
  i2052.xOffset = i2053[12]
  i2052.yOffset = i2053[13]
  i2052.xAdvance = i2053[14]
  i2052.scale = i2053[15]
  return i2052
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2058 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2059 = data
  i2058.m_Name = i2059[0]
  i2058.m_HashCode = i2059[1]
  i2058.m_ElementType = i2059[2]
  i2058.m_Unicode = i2059[3]
  i2058.m_GlyphIndex = i2059[4]
  i2058.m_Scale = i2059[5]
  return i2058
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2062 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2063 = data
  request.r(i2063[0], i2063[1], 0, i2062, 'sprite')
  i2062.m_Index = i2063[2]
  i2062.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2063[3], i2062.m_Metrics)
  i2062.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2063[4], i2062.m_GlyphRect)
  i2062.m_Scale = i2063[5]
  i2062.m_AtlasIndex = i2063[6]
  i2062.m_ClassDefinitionType = i2063[7]
  return i2062
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2064 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2065 = data
  var i2067 = i2065[0]
  var i2066 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2067.length; i += 1) {
    i2066.add(request.d('TMPro.TMP_Style', i2067[i + 0]));
  }
  i2064.m_StyleList = i2066
  return i2064
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2070 = root || request.c( 'TMPro.TMP_Style' )
  var i2071 = data
  i2070.m_Name = i2071[0]
  i2070.m_HashCode = i2071[1]
  i2070.m_OpeningDefinition = i2071[2]
  i2070.m_ClosingDefinition = i2071[3]
  i2070.m_OpeningTagArray = i2071[4]
  i2070.m_ClosingTagArray = i2071[5]
  i2070.m_OpeningTagUnicodeArray = i2071[6]
  i2070.m_ClosingTagUnicodeArray = i2071[7]
  return i2070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2073 = data
  var i2075 = i2073[0]
  var i2074 = []
  for(var i = 0; i < i2075.length; i += 1) {
    i2074.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2075[i + 0]) );
  }
  i2072.files = i2074
  i2072.componentToPrefabIds = i2073[1]
  return i2072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2079 = data
  i2078.path = i2079[0]
  request.r(i2079[1], i2079[2], 0, i2078, 'unityObject')
  return i2078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2081 = data
  var i2083 = i2081[0]
  var i2082 = []
  for(var i = 0; i < i2083.length; i += 1) {
    i2082.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2083[i + 0]) );
  }
  i2080.scriptsExecutionOrder = i2082
  var i2085 = i2081[1]
  var i2084 = []
  for(var i = 0; i < i2085.length; i += 1) {
    i2084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2085[i + 0]) );
  }
  i2080.sortingLayers = i2084
  var i2087 = i2081[2]
  var i2086 = []
  for(var i = 0; i < i2087.length; i += 1) {
    i2086.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2087[i + 0]) );
  }
  i2080.cullingLayers = i2086
  i2080.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2081[3], i2080.timeSettings)
  i2080.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2081[4], i2080.physicsSettings)
  i2080.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2081[5], i2080.physics2DSettings)
  i2080.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2081[6], i2080.qualitySettings)
  i2080.enableRealtimeShadows = !!i2081[7]
  i2080.enableAutoInstancing = !!i2081[8]
  i2080.enableStaticBatching = !!i2081[9]
  i2080.enableDynamicBatching = !!i2081[10]
  i2080.usePreservativeDynamicBatching = !!i2081[11]
  i2080.lightmapEncodingQuality = i2081[12]
  i2080.desiredColorSpace = i2081[13]
  var i2089 = i2081[14]
  var i2088 = []
  for(var i = 0; i < i2089.length; i += 1) {
    i2088.push( i2089[i + 0] );
  }
  i2080.allTags = i2088
  return i2080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2093 = data
  i2092.name = i2093[0]
  i2092.value = i2093[1]
  return i2092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2097 = data
  i2096.id = i2097[0]
  i2096.name = i2097[1]
  i2096.value = i2097[2]
  return i2096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2101 = data
  i2100.id = i2101[0]
  i2100.name = i2101[1]
  return i2100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2103 = data
  i2102.fixedDeltaTime = i2103[0]
  i2102.maximumDeltaTime = i2103[1]
  i2102.timeScale = i2103[2]
  i2102.maximumParticleTimestep = i2103[3]
  return i2102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2105 = data
  i2104.gravity = new pc.Vec3( i2105[0], i2105[1], i2105[2] )
  i2104.defaultSolverIterations = i2105[3]
  i2104.bounceThreshold = i2105[4]
  i2104.autoSyncTransforms = !!i2105[5]
  i2104.autoSimulation = !!i2105[6]
  var i2107 = i2105[7]
  var i2106 = []
  for(var i = 0; i < i2107.length; i += 1) {
    i2106.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2107[i + 0]) );
  }
  i2104.collisionMatrix = i2106
  return i2104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2111 = data
  i2110.enabled = !!i2111[0]
  i2110.layerId = i2111[1]
  i2110.otherLayerId = i2111[2]
  return i2110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2113 = data
  request.r(i2113[0], i2113[1], 0, i2112, 'material')
  i2112.gravity = new pc.Vec2( i2113[2], i2113[3] )
  i2112.positionIterations = i2113[4]
  i2112.velocityIterations = i2113[5]
  i2112.velocityThreshold = i2113[6]
  i2112.maxLinearCorrection = i2113[7]
  i2112.maxAngularCorrection = i2113[8]
  i2112.maxTranslationSpeed = i2113[9]
  i2112.maxRotationSpeed = i2113[10]
  i2112.baumgarteScale = i2113[11]
  i2112.baumgarteTOIScale = i2113[12]
  i2112.timeToSleep = i2113[13]
  i2112.linearSleepTolerance = i2113[14]
  i2112.angularSleepTolerance = i2113[15]
  i2112.defaultContactOffset = i2113[16]
  i2112.autoSimulation = !!i2113[17]
  i2112.queriesHitTriggers = !!i2113[18]
  i2112.queriesStartInColliders = !!i2113[19]
  i2112.callbacksOnDisable = !!i2113[20]
  i2112.reuseCollisionCallbacks = !!i2113[21]
  i2112.autoSyncTransforms = !!i2113[22]
  var i2115 = i2113[23]
  var i2114 = []
  for(var i = 0; i < i2115.length; i += 1) {
    i2114.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2115[i + 0]) );
  }
  i2112.collisionMatrix = i2114
  return i2112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2119 = data
  i2118.enabled = !!i2119[0]
  i2118.layerId = i2119[1]
  i2118.otherLayerId = i2119[2]
  return i2118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2121 = data
  var i2123 = i2121[0]
  var i2122 = []
  for(var i = 0; i < i2123.length; i += 1) {
    i2122.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2123[i + 0]) );
  }
  i2120.qualityLevels = i2122
  var i2125 = i2121[1]
  var i2124 = []
  for(var i = 0; i < i2125.length; i += 1) {
    i2124.push( i2125[i + 0] );
  }
  i2120.names = i2124
  i2120.shadows = i2121[2]
  i2120.anisotropicFiltering = i2121[3]
  i2120.antiAliasing = i2121[4]
  i2120.lodBias = i2121[5]
  i2120.shadowCascades = i2121[6]
  i2120.shadowDistance = i2121[7]
  i2120.shadowmaskMode = i2121[8]
  i2120.shadowProjection = i2121[9]
  i2120.shadowResolution = i2121[10]
  i2120.softParticles = !!i2121[11]
  i2120.softVegetation = !!i2121[12]
  i2120.activeColorSpace = i2121[13]
  i2120.desiredColorSpace = i2121[14]
  i2120.masterTextureLimit = i2121[15]
  i2120.maxQueuedFrames = i2121[16]
  i2120.particleRaycastBudget = i2121[17]
  i2120.pixelLightCount = i2121[18]
  i2120.realtimeReflectionProbes = !!i2121[19]
  i2120.shadowCascade2Split = i2121[20]
  i2120.shadowCascade4Split = new pc.Vec3( i2121[21], i2121[22], i2121[23] )
  i2120.streamingMipmapsActive = !!i2121[24]
  i2120.vSyncCount = i2121[25]
  i2120.asyncUploadBufferSize = i2121[26]
  i2120.asyncUploadTimeSlice = i2121[27]
  i2120.billboardsFaceCameraPosition = !!i2121[28]
  i2120.shadowNearPlaneOffset = i2121[29]
  i2120.streamingMipmapsMemoryBudget = i2121[30]
  i2120.maximumLODLevel = i2121[31]
  i2120.streamingMipmapsAddAllCameras = !!i2121[32]
  i2120.streamingMipmapsMaxLevelReduction = i2121[33]
  i2120.streamingMipmapsRenderersPerFrame = i2121[34]
  i2120.resolutionScalingFixedDPIFactor = i2121[35]
  i2120.streamingMipmapsMaxFileIORequests = i2121[36]
  i2120.currentQualityLevel = i2121[37]
  return i2120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2131 = data
  i2130.weight = i2131[0]
  i2130.vertices = i2131[1]
  i2130.normals = i2131[2]
  i2130.tangents = i2131[3]
  return i2130
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2132 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2133 = data
  request.r(i2133[0], i2133[1], 0, i2132, 'm_ObjectArgument')
  i2132.m_ObjectArgumentAssemblyTypeName = i2133[2]
  i2132.m_IntArgument = i2133[3]
  i2132.m_FloatArgument = i2133[4]
  i2132.m_StringArgument = i2133[5]
  i2132.m_BoolArgument = !!i2133[6]
  return i2132
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2134 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2135 = data
  i2134.xPlacement = i2135[0]
  i2134.yPlacement = i2135[1]
  i2134.xAdvance = i2135[2]
  i2134.yAdvance = i2135[3]
  return i2134
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"49":[50],"51":[50],"52":[50],"53":[50],"54":[50],"55":[50],"56":[57],"58":[13],"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[60],"67":[68],"69":[68],"70":[68],"71":[68],"72":[68],"73":[68],"74":[68],"75":[68],"76":[68],"77":[68],"78":[68],"79":[68],"80":[68],"81":[13],"82":[5],"83":[84],"85":[84],"19":[18],"86":[87],"88":[18],"89":[18],"25":[19],"23":[20,18],"90":[18],"21":[19],"91":[18],"92":[18],"93":[18],"94":[18],"95":[18],"96":[18],"97":[18],"27":[18],"98":[18],"99":[20,18],"100":[18],"101":[18],"102":[18],"103":[18],"104":[20,18],"105":[18],"106":[40],"107":[40],"41":[40],"108":[40],"109":[13],"16":[13],"110":[18],"111":[5,18],"28":[18,20],"112":[18],"113":[20,18],"114":[5],"115":[20,18],"116":[18],"117":[118],"119":[118],"120":[118]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","Project.Scripts.Hex.HexElement","Project.Scripts.Hex.HexCell","Project.Scripts.Hex.HexStack","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.Light","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.CanvasRenderer","UnityEngine.UI.CanvasScaler","UnityEngine.CanvasGroup","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Button","UnityEngine.UI.Mask","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","Project.Scripts.Core.GameController","Project.Scripts.Config.GameConfig","Project.Scripts.Config.LevelData","Project.Scripts.Core.GameBoard","Project.Scripts.Core.ChainReactionSystem","Project.Scripts.Tutorial.TutorialGuide","Project.Scripts.Core.PackshotScreen","Project.Scripts.Core.DefeatScreen","UnityEngine.GameObject","Project.Scripts.Config.HexMaterialMap","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Project.Scripts.Hex.DraggableStack","UnityEngine.BoxCollider","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "test_3d";

Deserializers.lunaInitializationTime = "06/04/2026 09:38:46";

Deserializers.lunaDaysRunning = "5.4";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "0";

Deserializers.projectId = "1bf212bd68d578e4a9cc999c221de5c8";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.7\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "True";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1718";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4538";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.test_3d";

Deserializers.disableAntiAliasing = false;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "3182b951-af2e-4dbf-a29d-84cc537ad3a0";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

