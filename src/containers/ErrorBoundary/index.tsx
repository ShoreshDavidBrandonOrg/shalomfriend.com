import * as React from 'react';

import { Error } from '../../components/Error';

interface Props {
  error?: string;
  children: React.ReactNode;
}

interface State {
  error: any;
}

export class ErrorBoundary extends React.Component<Props, State> {
  public state = {
    error: null,
  };

  public componentDidCatch(error: any) {
    this.setState({ error });
  }

  public render() {
    if (this.state.error) {
      return (
        <Error error="We're unsure what happened but this error has been reported to us. Please refresh." />
      );
    }
    return this.props.children;
  }
}
