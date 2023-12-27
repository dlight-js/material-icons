import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class JavascriptSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12 15v-2h1.5v.5h2v-1H12V9h5v2h-1.5v-.5h-2v1H17V15h-5zM9 9v4.5H7.5v-1H6V15h4.5V9H9z\"/>")
      .name("JavascriptSharp")
  }
}

export default JavascriptSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
