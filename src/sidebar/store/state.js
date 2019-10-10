import Utils from '../../utils'
import { DEFAULT_SETTINGS, SETTINGS_OPTIONS } from '../../defaults'
import { DEFAULT_TABS_MENU } from '../../defaults'
import { DEFAULT_BOOKMARKS_MENU } from '../../defaults'
import { DEFAULT_TABS_PANEL_MENU } from '../../defaults'
import { DEFAULT_BOOKMARKS_PANEL_MENU } from '../../defaults'

export default {
  upgrading: false,
  osInfo: null,
  os: null,
  private: browser.extension.inIncognitoContext,
  windowId: 0,
  windowFocused: true,
  otherWindows: [],

  width: 250,
  tabHeight: 30,
  navBtnWidth: 34,

  tabsMenu: Utils.cloneArray(DEFAULT_TABS_MENU),
  bookmarksMenu: Utils.cloneArray(DEFAULT_BOOKMARKS_MENU),
  tabsPanelMenu: Utils.cloneArray(DEFAULT_TABS_PANEL_MENU),
  bookmarksPanelMenu: Utils.cloneArray(DEFAULT_BOOKMARKS_PANEL_MENU),

  ctxMenu: null,
  winChoosing: false,
  hiddenPanelsBar: false,
  recalcScrollNeeded: false,
  selected: [],
  wheelBlockTimeout: null,

  lastPanelIndex: 1,
  panelIndex: 1,

  containers: [],
  panels: [],
  tabs: [],

  bookmarks: [],
  bookmarksCount: 0,
  bookmarkEditor: false,
  bookmarkEditorTarget: null,

  ...SETTINGS_OPTIONS,
  ...DEFAULT_SETTINGS,

  snapshots: [],
  keybindings: [],
  permAllUrls: false,
  permTabHide: false,

  favicons: [],
  favUrls: {},
}
