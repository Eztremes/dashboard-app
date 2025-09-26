import { createSlice, nanoid } from "@reduxjs/toolkit";
import initialData from "../data/initialData.json";

const initialState = {
  categories: initialData.categories,
};

const widgetsSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    addWidget: {
      reducer(state, action) {
        const { categoryId, widget } = action.payload;
        const cat = state.categories.find((c) => c.id === categoryId);
        if (cat) {
          cat.widgets.push(widget);
        }
      },
      prepare(categoryId, name, text) {
        return {
          payload: {
            categoryId,
            widget: { id: nanoid(), name, text },
          },
        };
      },
    },
    removeWidget(state, action) {
      const { categoryId, widgetId } = action.payload;
      const cat = state.categories.find((c) => c.id === categoryId);
      if (cat) {
        cat.widgets = cat.widgets.filter((w) => w.id !== widgetId);
      }
    },
    addCategory(state, action) {
      const { id, name } = action.payload;
      state.categories.push({ id, name, widgets: [] });
    },
    toggleWidgetInCategory(state, action) {
      // If widget exists in category remove it else add it
      const { categoryId, widget } = action.payload;
      const cat = state.categories.find((c) => c.id === categoryId);
      if (!cat) return;
      const exists = cat.widgets.find((w) => w.id === widget.id);
      if (exists) {
        cat.widgets = cat.widgets.filter((w) => w.id !== widget.id);
      } else {
        cat.widgets.push(widget);
      }
    },
    moveWidget(state, action) {
      // optional: move widget from one category to another
      const { fromCategoryId, toCategoryId, widgetId } = action.payload;
      const from = state.categories.find((c) => c.id === fromCategoryId);
      const to = state.categories.find((c) => c.id === toCategoryId);
      if (!from || !to) return;
      const widget = from.widgets.find((w) => w.id === widgetId);
      if (!widget) return;
      from.widgets = from.widgets.filter((w) => w.id !== widgetId);
      to.widgets.push(widget);
    },
  },
});

export const {
  addWidget,
  removeWidget,
  addCategory,
  toggleWidgetInCategory,
  moveWidget,
} = widgetsSlice.actions;

export default widgetsSlice.reducer;
