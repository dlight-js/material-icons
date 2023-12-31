import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ModeEditTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M5 18.08V19h.92l9.06-9.06-.92-.92z\" opacity=\".3\"/><path d=\"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 0 0 0-1.41z\"/>")
      .name("ModeEditTwoTone")
  }
}

export default ModeEditTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
