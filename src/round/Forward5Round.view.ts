import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class Forward5Round {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M18.87 13c-.5 0-.91.37-.98.86a6.006 6.006 0 0 1-7.42 4.96c-2.25-.54-3.91-2.27-4.39-4.53A6.014 6.014 0 0 1 11.95 7v2.79c0 .45.54.67.85.35l3.79-3.79c.2-.2.2-.51 0-.71L12.8 1.85a.5.5 0 0 0-.85.35V5c-4.94 0-8.84 4.48-7.84 9.6.6 3.11 2.9 5.5 5.99 6.19 4.83 1.08 9.15-2.2 9.77-6.67.09-.59-.4-1.12-1-1.12zm-6.44 2.15c-.05.07-.11.13-.18.17s-.17.06-.27.06c-.17 0-.31-.05-.42-.15s-.17-.24-.19-.41h-.84c.01.2.05.37.13.53s.19.28.32.39.29.19.46.24.35.08.53.08c.24 0 .46-.04.64-.12s.33-.18.45-.31.21-.28.27-.45.09-.35.09-.54c0-.22-.03-.43-.09-.6s-.14-.33-.25-.45-.25-.22-.41-.28-.34-.1-.55-.1c-.07 0-.14.01-.2.02s-.13.02-.18.04-.1.03-.15.05-.08.04-.11.05l.11-.92h1.7v-.71H10.9l-.25 2.17.67.17c.03-.03.06-.06.1-.09s.07-.05.12-.07.1-.04.15-.05.13-.02.2-.02c.12 0 .22.02.3.05s.16.09.21.15.1.14.13.24.04.19.04.31-.01.22-.03.31-.06.17-.11.24z\"/>")
      .name("Forward5Round")
  }
}

export default Forward5Round as Pretty as Typed<DLightIconType, HTMLSpanElement>