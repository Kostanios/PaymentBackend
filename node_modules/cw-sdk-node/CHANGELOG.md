<a name="1.0.0-beta.3"></a>

## 1.0.0-beta.3 (2020-02-19)

#### Features

- Added changelog file

#### Refactors

- refactored OrderBookWatcher initilization

#### Bug Fixes

- Removing tests that break CI. Turning CI back on
- Verified getOHLC works correctly with new period
- Updated live-orderbook example
- Removed yarn as dev dependency

#### Breaking Changes

- `OrderBookWatcher` no longer the exposed interface for users. Use the new `createOrderBookWatcher` instead

<a name="1.0.0-beta.2"></a>

## 1.0.0-beta.2 (2020-01-08)

#### Bug Fixes

- Removed duplicate period enum
- Reorganized autogen documentation configuration
- Updated dependencies
- Fixed typo in README

<a name="1.0.0-beta.1"></a>

## 1.0.0-beta.1 (2019-12-18)

#### Features

- New RESTClient
- New OrderBookWatcher
- Test reorganization
- Development tool refinements
- Generated documentation
- New example code
