import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class Icon60fpsSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19 8v8h-4V8h4m3-3H12v14h10V5zM10 8V5H2v14h9v-9H5V8h5zm-2 5v3H5v-3h3z\"/>")
      .name("Icon60fpsSharp")
  }
}

export default Icon60fpsSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
