import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FirstPageOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M18.41 16.59 13.82 12l4.59-4.59L17 6l-6 6 6 6 1.41-1.41zM6 6h2v12H6V6z\"/>")
      .name("FirstPageOutlined")
  }
}

export default FirstPageOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
