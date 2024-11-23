"use client"

import { CSSProperties } from "react"

interface MarsModelProps{
  styles: CSSProperties
  id?: string
  camera_controls: boolean
}
export default function MarsModel({
  styles,
  id,
  camera_controls
}:MarsModelProps){
  return(
    <model-viewer
      id={id}
      src="/models/mars.glb"
      alt="Um modelo 3D"
      auto-rotate
      camera-controls={camera_controls}
      style={styles} 
    />
  )
}
