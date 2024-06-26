import { component$, useSignal, useStyles$ } from '@builder.io/qwik';
import { Select } from '@qwik-ui/headless';
import { LuCheck } from '@qwikest/icons/lucide';

export default component$(() => {
  useStyles$(styles);
  const users = ['Tim', 'Ryan', 'Jim', 'Jessie', 'Abby'];
  const display = useSignal<string[]>([]);

  return (
    <Select.Root bind:displayText={display} multiple class="select">
      <Select.Trigger class="select-trigger">
        <Select.DisplayText>{display.value.join(', ')}</Select.DisplayText>
      </Select.Trigger>
      <Select.Popover class="select-popover">
        <Select.Listbox class="select-listbox">
          {users.map((user, index) => (
            <Select.Item value={index.toString()} class="select-item" key={user}>
              <Select.ItemLabel>{user}</Select.ItemLabel>
              <Select.ItemIndicator>
                <LuCheck />
              </Select.ItemIndicator>
            </Select.Item>
          ))}
        </Select.Listbox>
      </Select.Popover>
    </Select.Root>
  );
});

// internal
import styles from '../snippets/select.css?inline';
