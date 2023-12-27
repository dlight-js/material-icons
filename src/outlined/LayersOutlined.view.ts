import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class LayersOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m11.99 18.54-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16zm0-11.47L17.74 9 12 13.47 6.26 9 12 4.53z\"/>")
      .name("LayersOutlined")
  }
}

export default LayersOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
