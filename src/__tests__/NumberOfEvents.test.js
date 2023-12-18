import NumberOfEvents from "../components/NumberOfEvents";
import React from "react";
import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";
import App from "../App";


describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsComponent;
    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents setCurrentNOE={() => { }} setErrorAlert={() => { }} />);
    });

    test('Textbox Function', () => {
        const input = NumberOfEventsComponent.queryByRole('textbox');
        expect(input).toBeInTheDocument();
        expect(input).toHaveClass('number-of-events-input')
    });

    test('Default is 32', () => {
        const input = NumberOfEventsComponent.queryByRole('textbox');
        expect(input).toHaveValue("32");
    });

    test('User typing textbox', async () => {
        const input = NumberOfEventsComponent.queryByRole('textbox');
        await userEvent.type(input, '{backspace}{backspace}10');
        expect(input).toHaveValue('10');

    })
});

