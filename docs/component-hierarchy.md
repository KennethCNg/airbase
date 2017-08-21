# Component Hierarchy
\* An asterisk marks components that have already been defined. Their child nodes will be omitted to avoid repetition.

### Main Page
- App (div)
  - Header
    - **SearchContainer**
      - Search
    - Navigation
  - Main (div)
    - **VenueContainer**
      - VenueFilter
      - VenueList
        - VenueItem
    - **GMapsContainer**
      - GMaps


### Venue Page (Booking)
- App (div)
  - Header *
  - Main (div)
    - **VenueShowContainer**
      - Images
      - Description
      - Reviews
      - HostInfo
      - Location
        - **GMapsContainer** *
      - BookingForm


### User Profile Page
- App (div)
  - Header *
  - Main (div)
    - **UserContainer**
      - WishLists (low priority)
      - UserInfo
      - Reviews

### Wishlist Page
- App (div)
  - Header *
  - Main (div)
    - **VenueContainer** *
    - **GMapsContainer** *