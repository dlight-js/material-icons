import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DoorSlidingTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M13 19h5V5h-5v14zm1-8h2v2h-2v-2zm-8 8h5V5H6v14zm2-8h2v2H8v-2z\" opacity=\".3\"/><path d=\"M20 19V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v14H3v2h18v-2h-1zm-9 0H6V5h5v14zm7 0h-5V5h5v14z\"/><path d=\"M8 11h2v2H8zm6 0h2v2h-2z\"/>")
      .name("DoorSlidingTwoTone")
  }
}

export default DoorSlidingTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
