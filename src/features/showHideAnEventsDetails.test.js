import { loadFeature, defineFeature } from "jest-cucumber";
import App from "../App";
import { render, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EventList from "../components/EventList";

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, (test) => {
    test('An event element is collapsed by default', ({ given, when, then }) => {
        let AppComponent;
        given('the user opens the app', () => {
            AppComponent = render(<App />);
        });

        when('the user views the list of events', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');

            await waitFor(() => {
                const EventListItems =
                    within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            });

        });

        then('all events will be collapsed by default.', () => {
            const EventDOM = AppComponent.container.firstChild;
            const details = EventDOM.querySelector('.details');
            expect(details).not.toBeInTheDocument();

        });
    });


    test('User can expand an event to see details', ({ given, when, then }) => {
        let AppComponent;
        given('the user sees a list of events', async () => {
            AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;

            await waitFor(() => {
                const eventList = within(AppDOM).queryAllByRole('listitem');
                expect(eventList[0]).toBeTruthy();
            })
        });

        when('a user selects to view the events details', async () => {
            const button = AppComponent.queryAllByText('Show Details')[0];
            await userEvent.click(button);
        });

        then('the details will show for the chosen event.', () => {
            const EventDOM = AppComponent.container.firstChild;
            const details = EventDOM.querySelector('.details');
            expect(details).toBeInTheDocument();
        });
    });


    test('User can collapse an event to hide details', ({ given, when, then }) => {
        let AppComponent;
        let button;
        given('the user views the event details', async () => {
            AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;

            await waitFor(() => {
                const eventList = within(AppDOM).queryAllByRole('listitem');
                expect(eventList[0]).toBeTruthy();
            });

            button = AppComponent.queryAllByText('Show Details')[0];
            await userEvent.click(button);

            const EventDOM = AppComponent.container.firstChild;
            const details = EventDOM.querySelector('.details');
            expect(details).toBeInTheDocument();
        });

        when('the user clicks a button to hide the event details', async () => {
            await userEvent.click(button);

        });

        then('the details of that event will be hidden.', () => {
            const EventDOM = AppComponent.container.firstChild;
            const details = EventDOM.querySelector('.details');
            expect(details).not.toBeInTheDocument();
        });
    });

});