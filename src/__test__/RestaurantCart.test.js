import { render, screen } from "@testing-library/react";
import RestaurantCard, {
  restaurantCardWithRecommendedLabel,
} from "../components/RestaurantCard";
import { mockRestaurantData } from "./mockData/restaurantMockData";
import "@testing-library/jest-dom";

describe("Restaurant Card component", () => {
  test("Should render restaurant card component with recommended label", () => {
    const RecommendedLabel = restaurantCardWithRecommendedLabel(RestaurantCard);
    render(
      <RecommendedLabel
        name={mockRestaurantData.name}
        areaName={mockRestaurantData.areaName}
        cuisines={mockRestaurantData.cuisines}
        avgRating={mockRestaurantData.avgRating}
        eta={mockRestaurantData.eta}
        cloudinaryImageId={mockRestaurantData.cloudinaryImageId}
        costForTwo={mockRestaurantData.costForTwo}
      />
    );
    const restaurantName = screen.getByText("Chinese Wok");
    const promotedLabel = screen.getByText("Recommended");
    expect(promotedLabel).toBeInTheDocument();
    expect(restaurantName).toBeInTheDocument();
  });
});
