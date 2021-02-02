# IDERemove Component

## Purpose

To provide a generic remove/delete behaviour. Depending on what is being deleted
or removed, the time required to delete or remove an entity could vary. To cover
this, this component presents a set of common states for a user to interact with
before and after deletion or removal. All of these states will be text based,
and you will need to provide these strings pre translated.

The pattern calls for two types of operation - medium impact, and high impact.
In the case of high impact, the user is expected to type the name of the item
being deleted or removed before allowing the delete/remove button to be clicked.
In each case, following the clicking of removal or deletion, a set of
summary/follow up text can be provided via the `postDeleteContent` property. At
this point, the modal will become passive, and the user should close it. If you
do not want to use this capability, close the modal via the `open` prop as a
part of the `onDelete` callback.

### Feature file

Behaviours for this component are defined in
[src/components/IdeRemove/IdeRemove.feature](./IdeRemove.feature)

### Carbon elements used

- Carbon Modal, Text input

### Component details

### Remaining items to implement/designed

- A 'pending' state while a delete/remove is happening. No design for this was
  described, so it has not been implemented.

## Change history

| Date       | Change                                    | Contributed by / Product         |
| ---------- | ----------------------------------------- | -------------------------------- |
| 16/09/2019 | First contribution of IdeRemove component | Matthew Chirgwin / Event Streams |
