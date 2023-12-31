import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class NotificationImportantSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12 23c1.1 0 1.99-.89 1.99-1.99h-3.98c0 1.1.89 1.99 1.99 1.99zm7-6v-6c0-3.35-2.36-6.15-5.5-6.83V1.5h-3v2.67C7.36 4.85 5 7.65 5 11v6l-2 2v1h18v-1l-2-2zm-6-1h-2v-2h2v2zm0-4h-2V8h2v4z\"/>")
      .name("NotificationImportantSharp")
  }
}

export default NotificationImportantSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
