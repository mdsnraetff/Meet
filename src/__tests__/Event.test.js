import Event from "../components/Event";
import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";
import mockData from "../mock-data";
import App from "../App";

const mockEvent = mockData[0];

describe('<Event /> Component', () => {
    let EventComponent;
    beforeEach(() => {
        EventComponent = render(<Event event={mockEvent} />);
    });

    test('Event Title', () => {
        const title = EventComponent.queryByText(mockEvent.summary);
        expect(title).toBeInTheDocument();
    });

    test('Event Start', () => {
        const time = EventComponent.queryByText(mockEvent.start.dateTime);
        expect(time).toBeInTheDocument();
    });

    test('Event location', () => {
        const location = EventComponent.queryByText(mockEvent.location);
        expect(location).toBeInTheDocument();
    });

    test('Details Hidden by Default', () => {
        const eventDOM = EventComponent.container.firstChild;
        const details = eventDOM.querySelector('.details');
        expect(details).not.toBeInTheDocument();
    });

    test('Show Details Button', () => {
        const button = EventComponent.queryByText('Show Details');
        expect(button).toBeInTheDocument();
    });

    test('Show Details After Button Click', async () => {
        const user = userEvent.setup();
        const button = EventComponent.queryByText('Show Details');
        await user.click(button);
        const eventDOM = EventComponent.container.firstChild;
        const details = eventDOM.querySelector('.details');
        expect(details).toBeInTheDocument();
    });

    test('Hide Details', async () => {
        const button = EventComponent.queryByText('Show Details');
        const eventDOM = EventComponent.container.firstChild;
        await userEvent.click(button);
        const hideButton = EventComponent.queryByText('Hide Details');
        await userEvent.click(hideButton);
        const details = eventDOM.querySelector('details');
        expect(details).not.toBeInTheDocument();
    });
});

