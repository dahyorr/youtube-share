// import {render, screen, mount} from "@testing-library/react";
import App from "../App";

it("renders without crashing", () => {
  <App />;
});

it('should have a api key', () => {
      expect(process.env.REACT_APP_FIREBASE_API_KEY).toBeDefined();
  });
