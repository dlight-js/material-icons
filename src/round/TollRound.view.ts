import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class TollRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M15 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM3 12c0-2.39 1.4-4.46 3.43-5.42.34-.16.57-.47.57-.84v-.19c0-.68-.71-1.11-1.32-.82C2.92 5.99 1 8.77 1 12s1.92 6.01 4.68 7.27c.61.28 1.32-.14 1.32-.82v-.18c0-.37-.23-.69-.57-.85A5.994 5.994 0 0 1 3 12z\"/>")
      .name("TollRound")
  }
}

export default TollRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
