/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import Button from 'components/Button';
import LocaleToggle from 'containers/LocaleToggle';
import TestForm from 'forms/TestForm';
import messages from './messages';
import './styles.scss';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  onSubmit(value) {
    console.log('this is testForm');
    console.log(value.toJS());
  }

  render() {
    return (
      <div className="home-page page-container">
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <Button />
        <LocaleToggle />
        <TestForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}
