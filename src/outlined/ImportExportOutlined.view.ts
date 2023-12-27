import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ImportExportOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M9 3 5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z\"/>")
      .name("ImportExportOutlined")
  }
}

export default ImportExportOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
