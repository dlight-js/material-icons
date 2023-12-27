import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DownloadOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19 9h-4V3H9v6H5l7 7 7-7zm-8 2V5h2v6h1.17L12 13.17 9.83 11H11zm-6 7h14v2H5z\"/>")
      .name("DownloadOutlined")
  }
}

export default DownloadOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
