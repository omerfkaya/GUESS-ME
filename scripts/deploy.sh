echo ---------------------------------------------------------
echo "Step 1: Build the contract (may take a few seconds)"
echo ---------------------------------------------------------
yarn build:release
echo ---------------------------------------------------------
echo "Step 2: Deploy the contract"
echo ---------------------------------------------------------
echo
yarn deploywi

exit 0