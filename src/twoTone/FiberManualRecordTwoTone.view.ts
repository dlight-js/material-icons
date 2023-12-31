import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FiberManualRecordTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12 18c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z\" opacity=\".3\"/><path d=\"M12 20c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8zm0-14c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6z\"/>")
      .name("FiberManualRecordTwoTone")
  }
}

export default FiberManualRecordTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
