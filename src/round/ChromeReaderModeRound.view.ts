import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class ChromeReaderModeRound {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14c0 .55-.45 1-1 1h-8V6h8c.55 0 1 .45 1 1v11zm-1.75-8.5h-5.5c-.41 0-.75.34-.75.75s.34.75.75.75h5.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75zm0 2.5h-5.5c-.41 0-.75.34-.75.75s.34.75.75.75h5.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75zm0 2.5h-5.5c-.41 0-.75.34-.75.75s.34.75.75.75h5.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75z\"/>")
      .name("ChromeReaderModeRound")
  }
}

export default ChromeReaderModeRound as Pretty as Typed<DLightIconType, HTMLSpanElement>
