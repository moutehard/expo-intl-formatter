import * as React from 'react';

import { ExpoIntlFormatterViewProps } from './ExpoIntlFormatter.types';

export default function ExpoIntlFormatterView(props: ExpoIntlFormatterViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
