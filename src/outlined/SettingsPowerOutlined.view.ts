import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SettingsPowerOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm2-22h-2v10h2V2zm3.56 2.44-1.45 1.45A5.969 5.969 0 0 1 18 11c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 4.44A7.961 7.961 0 0 0 4 11c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56zM15 24h2v-2h-2v2z\"/>")
      .name("SettingsPowerOutlined")
  }
}

export default SettingsPowerOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
