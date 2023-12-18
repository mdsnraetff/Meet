import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';
import { render, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';


const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
    test('When the user hasnt specified a number, 32 events are shown by default', ({ given, when, then }) => {
        let AppComponent;
        let eventList;
        given('the user hasnt specified the number of events', () => {
            AppComponent = render(<App />);
        });

        when('the user sees the list of events', async () => {
            const AppDOM = AppComponent.container.firstChild;
            await waitFor(() => {
                eventList = within(AppDOM).queryAllByRole('listitem');
                expect(eventList[0]).toBeTruthy();
            });
        });

        then(/^the number of events displayed will be (\d+)$/, (arg0) => {
            expect(eventList.length).toEqual(32);
        });
    });

    test('The user can change the number of events displayed', ({ given, when, then }) => {
        let AppComponent;
        given('the user is viewing events', async () => {
            AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;
            await waitFor(() => {
                const eventList = within(AppDOM).queryAllByRole('listitem');
                expect(eventList[0]).toBeTruthy();
            });

        });

        when('the user wants to change the displayed number of events', async () => {
            const button = AppComponent.queryByTestId('numberOfEventsInput');
            await userEvent.type(button, '{backspace}{backspace}10');
        });

        then('the number of events displayed will reflect the number chosen by the user', () => {
            const AppDOM = AppComponent.container.firstChild;
            const eventList = within(AppDOM).queryAllByRole('listitem');
            expect(eventList.length).toEqual(10);

        });
    });

});