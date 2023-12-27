import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ImportExportTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M5 6.99h3V14h2V6.99h3L9 3zM14 10v7.01h-3L15 21l4-3.99h-3V10z\"/>")
      .name("ImportExportTwoTone")
  }
}

export default ImportExportTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
