import { NativeSelect } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = (props: any) => {
  const { platforms, isLoading, error } = usePlatforms();
  if (error) return null;
  return (
    <NativeSelect.Root size="sm" width="240px">
      <NativeSelect.Field
        placeholder="Platform"
        onChange={(e) => {
          const selectedPlatform = platforms.find(
            (p) => p.slug === e.target.value
          );

          props.onSelect(selectedPlatform);
        }}
      >
        {platforms.map((platform) => (
          <option key={platform.id} value={platform.slug}>
            {platform.name}
          </option>
        ))}
      </NativeSelect.Field>
      <NativeSelect.Indicator />
    </NativeSelect.Root>
  );
};

export default PlatformSelector;
