import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DownloadTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M13 9V5h-2v6H9.83L12 13.17 14.17 11H13z\" opacity=\".3\"/><path d=\"M15 9V3H9v6H5l7 7 7-7h-4zm-3 4.17L9.83 11H11V5h2v6h1.17L12 13.17zM5 18h14v2H5z\"/>")
      .name("DownloadTwoTone")
  }
}

export default DownloadTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
