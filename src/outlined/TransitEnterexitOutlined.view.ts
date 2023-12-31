import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class TransitEnterexitOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M16 18H6V8h3v4.77L15.98 6 18 8.03 11.15 15H16v3z\"/>")
      .name("TransitEnterexitOutlined")
  }
}

export default TransitEnterexitOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
