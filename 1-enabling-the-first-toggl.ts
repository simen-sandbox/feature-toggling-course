function isEnabled(feature: string) {
  const toggles = Deno.env.get("TOGGLES");

  if (toggles) {
    const features = toggles.toLowerCase().split(",");
    if (features.includes(feature.toLowerCase())) {
      return true;
    }
  }

  return false;
}

export async function main(): Promise<string> {
  // Fun server / command utility here

  if (isEnabled("v2")) {
    return "hello world";
  }

  if (isEnabled("v3")) {
    return "hello world v3";
  }

  return "hello";
}

console.log(await main());
