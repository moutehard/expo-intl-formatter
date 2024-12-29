import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoIntlFormatterViewProps } from './ExpoIntlFormatter.types';

const NativeView: React.ComponentType<ExpoIntlFormatterViewProps> =
  requireNativeView('ExpoIntlFormatter');

export default function ExpoIntlFormatterView(props: ExpoIntlFormatterViewProps) {
  return <NativeView {...props} />;
}
