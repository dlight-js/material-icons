import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class LayersSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m11.99 18.54-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z\"/>")
      .name("LayersSharp")
  }
}

export default LayersSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
