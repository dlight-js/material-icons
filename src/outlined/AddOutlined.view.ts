import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class AddOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/>")
      .name("AddOutlined")
  }
}

export default AddOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
