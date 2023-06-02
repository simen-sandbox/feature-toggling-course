function isEnabled(_feature: string) {
  return false;
}

export async function main(): Promise<string> {
  // Fun server / command utility here

  if (isEnabled('v2')) {
    return 'hello world';
  }

  return 'hello';
}

console.log(await main());