import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FormatTextdirectionRToLOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M10 4v4c-1.1 0-2-.9-2-2s.9-2 2-2m8-2h-8C7.79 2 6 3.79 6 6s1.79 4 4 4v5h2V4h2v11h2V4h2V2zM8 14l-4 4 4 4v-3h12v-2H8v-3z\"/>")
      .name("FormatTextdirectionRToLOutlined")
  }
}

export default FormatTextdirectionRToLOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
