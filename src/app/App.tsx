import { Routing } from 'pages';
import { withProviders } from 'app/providers';
import React from 'react';
import './styles/index.scss';

const App = () => <Routing />;

export const AppWithProviders = withProviders(App);
