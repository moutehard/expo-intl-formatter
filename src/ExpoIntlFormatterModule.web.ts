import { registerWebModule, NativeModule } from 'expo';

import { ExpoIntlFormatterModuleEvents } from './ExpoIntlFormatter.types';

class ExpoIntlFormatterModule extends NativeModule<ExpoIntlFormatterModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoIntlFormatterModule);
