import React from "react";
import { render, screen } from "@testing-library/react";

import PetsPage from "../PetsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders pets page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <PetsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("pets-datatable")).toBeInTheDocument();
    expect(screen.getByRole("pets-add-button")).toBeInTheDocument();
});
