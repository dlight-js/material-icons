import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ImportantDevicesSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M24 11.01 17 11v11h7V11.01zM23 20h-5v-7h5v7zM22 2H0v16h9v2H7v2h8v-2h-2v-2h2v-2H2V4h18v5h2V2zM11.97 9 11 6l-.97 3H7l2.47 1.76-.94 2.91 2.47-1.8 2.47 1.8-.94-2.91L15 9h-3.03z\"/>")
      .name("ImportantDevicesSharp")
  }
}

export default ImportantDevicesSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
