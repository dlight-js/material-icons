import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PermScanWifiRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12 3C7.41 3 3.86 4.53.89 6.59c-.49.33-.59 1-.22 1.46l9.78 12.04c.8.98 2.3.99 3.1 0l9.78-12.02a.999.999 0 0 0-.22-1.46C20.14 4.54 16.59 3 12 3zm0 13c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm-1-8V6h2v2h-2z\"/>")
      .name("PermScanWifiRound")
  }
}

export default PermScanWifiRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
