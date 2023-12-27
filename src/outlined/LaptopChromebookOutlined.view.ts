import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class LaptopChromebookOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M22 18V3H2v15H0v2h24v-2h-2zm-8 0h-4v-1h4v1zm6-3H4V5h16v10z\"/>")
      .name("LaptopChromebookOutlined")
  }
}

export default LaptopChromebookOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
