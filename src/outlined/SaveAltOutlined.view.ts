import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SaveAltOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67 2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2v9.67z\"/>")
      .name("SaveAltOutlined")
  }
}

export default SaveAltOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
