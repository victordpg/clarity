---
title: Overview
toc: true
---

::: component-summary

Toggle switches are the digital equivalent of a physical on/off switch. They ask the user to choose between two and mutually exclusive options while always having a default value.

:::

::: component-section-level-one-title

## Usage

:::

:::component-section-level-one

Use a toggle switch when you need the sole options of “on” and “off.”

Toggle switches take up less space than an “on/off” radio button group and communicate their intended purpose better than a checkbox that toggles functionality.

:::
<doc-pinbox-vs>

  <div>unused div that is never rendered but gets passed an error</div>
  <template #left>
  <cds-toggle>
      <label>Airplane mode</label>
      <input type="checkbox" checked />
  </cds-toggle>

Use a toggle for On or Off choices.

  </template>
  <template #right>
    <cds-checkbox>
    <label>Remember me</label>
    <input type="checkbox" checked />
    </cds-checkbox>

Use a <a href="../checkbox">checkbox</a> for Yes or No choices.

  </template>
</doc-pinbox-vs>

::: component-section-level-one-title

## States

:::

<DocIndent>
<div cds-layout="vertical gap:lg">
    <cds-toggle>
        <label>Enabled, unselected</label>
        <input type="checkbox" />
        <cds-control-message>Helper message</cds-control-message>
    </cds-toggle>
    <cds-toggle>
        <label>Enabled, selected</label>
        <input type="checkbox" checked />
        <cds-control-message>Helper message</cds-control-message>
    </cds-toggle>
    <cds-toggle>
        <label>Disabled, unselected</label>
        <input type="checkbox" disabled />
        <cds-control-message>Disabled message</cds-control-message>
    </cds-toggle>
          <cds-toggle>
        <label>Disabled, selected</label>
        <input type="checkbox" disabled checked />
        <cds-control-message>Disabled message</cds-control-message>
    </cds-toggle>
    <cds-toggle status="error">
        <label>error</label>
        <input type="checkbox" />
        <cds-control-message status="error">Error message</cds-control-message>
    </cds-toggle>
    <cds-toggle status="success">
        <label>success</label>
        <input type="checkbox" />
        <cds-control-message status="success">Success message</cds-control-message>
    </cds-toggle>
</div>
</DocIndent>

::: component-section-level-one-title

## Layouts

:::

::: component-section-level-one

Toggle is available in vertical, vertical inline, horizontal, horizontal inline, and compact layout. The align options for Toggle are useful for creating continuity with other UI elements that are related to the toggle selection. See more layout guidelines on the form page. [form page](/web-components/form/).

:::

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

### Vertical

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/toggle/vertical.html)!!!
</div>

:::

</div>

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

### Vertical Inline

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/toggle/vertical-inline.html)!!!
</div>

:::

</div>

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

### Horizontal

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/toggle/horizontal.html)!!!
</div>

:::

</div>

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

### Horizontal Inline

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/toggle/horizontal-inline.html)!!!
</div>

:::

</div>

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

### Compact

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/toggle/compact.html)!!!
</div>

:::

</div>

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

### Alignment

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/toggle/alignment.html)!!!
</div>

:::

</div>
